import { Booking, AvailabilityResult } from "@/types/booking";
import { datesOverlap } from "@/utils/dateUtils";

/**
 * Check if a room is available for the given date range.
 * Takes the current bookings array as a parameter to avoid coupling to context.
 */
export function checkAvailability(
  roomId: string,
  startDate: string,
  endDate: string,
  existingBookings: Booking[]
): AvailabilityResult {
  // Simulate 10% chance of API failure
  if (Math.random() < 0.1) {
    throw new Error("Network timeout: Unable to reach booking server.");
  }

  const conflicting = existingBookings.find(
    (b) =>
      b.roomId === roomId &&
      b.status !== "cancelled" &&
      datesOverlap(b.startDate, b.endDate, startDate, endDate)
  );

  if (conflicting) {
    return {
      available: false,
      message: `This room is already booked from ${conflicting.startDate} to ${conflicting.endDate}.`,
    };
  }

  return {
    available: true,
    message: "Room is available for the selected dates!",
  };
}

/**
 * Create a new booking object with a generated ID.
 */
export function createBooking(
  booking: Omit<Booking, "id">
): Booking {
  // Simulate 10% chance of API failure during booking
  if (Math.random() < 0.1) {
    throw new Error("Booking failed: Database transaction aborted.");
  }

  return {
    id: `booking-${Date.now()}`,
    ...booking,
  };
}

