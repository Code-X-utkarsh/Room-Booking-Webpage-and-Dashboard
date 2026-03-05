"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Room } from "@/types/room";
import { useAuth } from "@/context/AuthContext";
import { useBooking } from "@/context/BookingContext";
import { checkAvailability, createBooking } from "@/services/bookingService";
import { getTodayISO, daysBetween, isPastDate } from "@/utils/dateUtils";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loader from "@/components/ui/Loader";

interface BookingModalProps {
  room: Room;
  onClose: () => void;
}

type BookingStep = "dates" | "checking" | "result";

function BookingModalInner({ room, onClose }: BookingModalProps) {
  const { user } = useAuth();
  const { bookings, addBooking } = useBooking();
  const router = useRouter();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [step, setStep] = useState<BookingStep>("dates");
  const [availabilityMsg, setAvailabilityMsg] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [errors, setErrors] = useState<{ start?: string; end?: string }>({});
  const [isConfirming, setIsConfirming] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const today = useMemo(() => getTodayISO(), []);

  const nights = useMemo(
    () => (startDate && endDate ? daysBetween(startDate, endDate) : 0),
    [startDate, endDate]
  );

  const totalPrice = useMemo(() => nights * room.price, [nights, room.price]);

  const validate = useCallback((): boolean => {
    const next: { start?: string; end?: string } = {};

    if (!startDate) {
      next.start = "Start date is required";
    } else if (isPastDate(startDate)) {
      next.start = "Start date cannot be in the past";
    }

    if (!endDate) {
      next.end = "End date is required";
    } else if (startDate && endDate < startDate) {
      next.end = "End date must be after start date";
    } else if (startDate && endDate === startDate) {
      next.end = "Minimum booking is 1 night";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [startDate, endDate]);

  const handleCheckAvailability = useCallback(() => {
    if (!validate()) return;

    setStep("checking");

    // Simulate network delay
    setTimeout(() => {
      try {
        const result = checkAvailability(room.id, startDate, endDate, bookings);
        setIsAvailable(result.available);
        setAvailabilityMsg(result.message);
      } catch (error: any) {
        setIsAvailable(false);
        setAvailabilityMsg(error.message || "Unable to reach booking server. Please try again.");
      }
      setStep("result");
    }, 800);
  }, [validate, room.id, startDate, endDate, bookings]);

  const handleConfirmBooking = useCallback(() => {
    if (!user) return;

    setIsConfirming(true);

    // Simulate network delay
    setTimeout(() => {
      try {
        const booking = createBooking({
          roomId: room.id,
          roomName: room.name,
          userId: user.id,
          startDate,
          endDate,
          totalPrice,
          status: "confirmed",
        });

        addBooking(booking);
        setSuccessMsg("Booking confirmed! Redirecting…");

        setTimeout(() => {
          router.push("/bookings");
        }, 1200);
      } catch (error: any) {
        setIsConfirming(false);
        setIsAvailable(false);
        setAvailabilityMsg(error.message || "Failed to confirm booking. Please try again.");
        setStep("result");
      }
    }, 600);
  }, [user, room, startDate, endDate, totalPrice, addBooking, router]);

  const handleReset = useCallback(() => {
    setStep("dates");
    setAvailabilityMsg("");
    setIsAvailable(false);
    setErrors({});
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Book {room.name}</h2>
            <p className="mt-0.5 text-sm text-gray-500">
              ${room.price}/night · Up to {room.capacity} people
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {successMsg ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-green-700">{successMsg}</p>
            </div>
          ) : (
            <>
              {/* Date Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Start Date"
                  type="date"
                  value={startDate}
                  min={today}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    if (step !== "dates") handleReset();
                  }}
                  error={errors.start}
                  disabled={isConfirming}
                />
                <Input
                  label="End Date"
                  type="date"
                  value={endDate}
                  min={startDate || today}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    if (step !== "dates") handleReset();
                  }}
                  error={errors.end}
                  disabled={isConfirming}
                />
              </div>

              {/* Price summary */}
              {nights > 0 && (
                <div className="mt-4 rounded-xl bg-gray-50 px-4 py-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>
                      ${room.price} × {nights} night{nights > 1 ? "s" : ""}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${totalPrice}
                    </span>
                  </div>
                </div>
              )}

              {/* Checking state */}
              {step === "checking" && <Loader />}

              {/* Availability result */}
              {step === "result" && (
                <div
                  className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${isAvailable
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                    }`}
                >
                  {availabilityMsg}
                </div>
              )}

              {/* Actions */}
              <div className="mt-5 flex gap-3">
                {step === "dates" && (
                  <Button onClick={handleCheckAvailability} className="w-full">
                    Check Availability
                  </Button>
                )}

                {step === "result" && isAvailable && (
                  <Button
                    onClick={handleConfirmBooking}
                    disabled={isConfirming}
                    className="w-full"
                  >
                    {isConfirming ? "Confirming…" : "Confirm Booking"}
                  </Button>
                )}

                {step === "result" && !isAvailable && (
                  <Button onClick={handleReset} variant="secondary" className="w-full">
                    Try Different Dates
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const BookingModal = memo(BookingModalInner);
BookingModal.displayName = "BookingModal";

export default BookingModal;

