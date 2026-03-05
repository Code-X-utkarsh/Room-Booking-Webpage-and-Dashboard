"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { useBooking } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";
import { formatDate, daysBetween } from "@/utils/dateUtils";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const statusStyles: Record<string, string> = {
  confirmed: "bg-green-50 text-green-700 border border-green-200",
  pending: "bg-amber-50 text-amber-700 border border-amber-200",
  cancelled: "bg-red-50 text-red-700 border border-red-200",
};

export default function BookingsPage() {
  const { bookings, cancelBooking } = useBooking();
  const { user } = useAuth();

  const userBookings = useMemo(
    () => bookings.filter((b) => b.userId === user?.id),
    [bookings, user?.id]
  );

  const handleCancel = useCallback(
    (id: string) => {
      cancelBooking(id);
    },
    [cancelBooking]
  );

  return (
    <ProtectedRoute>
      <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden">

        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

          <DashboardHeader />

          <main className="flex-1 overflow-y-auto overflow-x-hidden p-6">

            {/* Breadcrumb */}
            <div className="text-[12px] text-gray-400 flex items-center gap-2 mb-1">
              <Link href="/dashboard" className="hover:text-gray-600">Dashboard</Link>
              <span>›</span>
              <span className="text-gray-600">My Bookings</span>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[26px] font-bold text-gray-900 tracking-tight">My Bookings</h1>
              <Link href="/dashboard">
                <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-[13px] font-semibold rounded-lg shadow-md shadow-purple-200 hover:shadow-lg transition-all">
                  + Browse Hotels
                </button>
              </Link>
            </div>

            {userBookings.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-gray-100">
                <div className="mb-5 w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center">
                  <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">No bookings yet</h2>
                <p className="mt-2 max-w-sm text-sm text-gray-500">
                  Head to the dashboard to find and book the perfect hotel.
                </p>
                <Link href="/dashboard">
                  <button className="mt-6 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-semibold rounded-lg shadow-md shadow-purple-200 hover:shadow-lg transition-all">
                    Browse Hotels
                  </button>
                </Link>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {userBookings.map((booking) => {
                  const nights = daysBetween(booking.startDate, booking.endDate);
                  return (
                    <div key={booking.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-50">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[booking.status] ?? "bg-gray-100 text-gray-600"}`}>
                          {booking.status}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">{booking.id.slice(0, 14)}</span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900">{booking.roomName}</h3>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            {formatDate(booking.startDate)} → {formatDate(booking.endDate)}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            {nights} night{nights !== 1 ? "s" : ""}
                          </div>
                        </div>
                        <div className="mt-4 rounded-xl bg-purple-50 px-4 py-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Total</span>
                            <span className="text-xl font-bold text-gray-900">${booking.totalPrice}</span>
                          </div>
                        </div>
                        {booking.status === "confirmed" && (
                          <button
                            onClick={() => handleCancel(booking.id)}
                            className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 transition-colors"
                          >
                            Cancel Booking
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
