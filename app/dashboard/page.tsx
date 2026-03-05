"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import BookingModal from "@/components/rooms/BookingModal";
import { getRooms } from "@/services/roomService";
import { Room } from "@/types/room";

import { useAuth } from "@/context/AuthContext";
import { useBooking } from "@/context/BookingContext";
import HotelCard from "@/components/dashboard/HotelCard";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardPage() {
  const rooms = useMemo(() => getRooms(), []);
  const { user } = useAuth();
  const { bookings } = useBooking();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeTab, setActiveTab] = useState("available");

  const handleBook = useCallback((room: Room) => {
    setSelectedRoom(room);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedRoom(null);
  }, []);

  const userBookedRoomIds = useMemo(() => {
    return bookings
      .filter((b) => b.userId === user?.id && b.status === "confirmed")
      .map((b) => b.roomId);
  }, [bookings, user?.id]);

  const filteredRooms = useMemo(() => {
    if (activeTab === "available") return rooms;
    if (activeTab === "booked") return rooms.filter(r => userBookedRoomIds.includes(r.id));
    if (activeTab === "favorites") return rooms.slice(0, 3); // Mock favorites
    if (activeTab === "recent") return rooms.slice(0, 5); // Mock recent
    return rooms;
  }, [rooms, activeTab, userBookedRoomIds]);

  const tabs = [
    { id: "available", label: "Available", count: rooms.length, color: "bg-purple-100 text-purple-700" },
    { id: "booked", label: "Booked", count: userBookedRoomIds.length, color: "bg-pink-100 text-pink-700" },
    { id: "favorites", label: "Favorites", count: 3, color: "bg-orange-100 text-orange-700" },
    { id: "recent", label: "Recently Viewed", count: 5, color: "bg-green-100 text-green-700" },
  ];

  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = new Date().getDate();

  return (
    <ProtectedRoute>
      <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <DashboardHeader />

          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6">
            {/* Breadcrumb */}
            <div className="text-[12px] text-gray-400 flex items-center gap-2 mb-1">
              <span className="hover:text-gray-600 cursor-pointer">Workspace</span>
              <span>›</span>
              <span className="hover:text-gray-600 cursor-pointer">Hotels</span>
              <span>›</span>
              <span className="text-gray-600">Dashboard</span>
            </div>

            {/* Page Title */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h1 className="text-[26px] font-bold text-gray-900 tracking-tight">Aether — Hotel Dashboard</h1>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">✦ Pro member</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[12px] text-gray-400 hidden sm:block">Last Update on {new Date().toLocaleDateString()}</div>
                <div className="flex -space-x-2 hidden sm:flex">
                  {["#8B5CF6", "#EC4899", "#F59E0B", "#10B981"].map((color, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm" style={{ backgroundColor: color }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-gray-500 text-[10px] font-bold">+6</div>
                </div>
                <button className="px-4 py-1.5 bg-gray-900 text-white text-[12px] font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-1.5 shadow-sm">
                  Add <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
            </div>

            {/* Status Tabs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all border ${activeTab === tab.id
                    ? "bg-white border-gray-200 text-gray-900 shadow-sm"
                    : "bg-transparent border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab.label}
                  <span className={`min-w-[20px] h-5 flex items-center justify-center rounded-full text-[11px] font-bold ${tab.color}`}>{tab.count}</span>
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
              ))}
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-12 gap-5">

              {/* LEFT — Hotel Cards (8 cols) */}
              <div className="col-span-12 xl:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filteredRooms.length > 0 ? (
                    filteredRooms.map((room) => (
                      <HotelCard key={room.id} room={room} onBook={handleBook} />
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-gray-100 border-dashed">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-2xl">
                        🏨
                      </div>
                      <h3 className="text-sm font-bold text-gray-900">No rooms found</h3>
                      <p className="mt-1 text-xs text-gray-500"> Try a different category or clear your filters.</p>
                      <button onClick={() => setActiveTab("available")} className="mt-4 px-4 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                        View All
                      </button>
                    </div>
                  )}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                  {/* Upcoming Bookings */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-[15px] font-bold text-gray-900 flex items-center gap-2">📅 Upcoming Bookings</h3>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4">
                      <Image src={rooms[0]?.image || ""} alt="Preview" fill className="object-cover" sizes="300px" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-semibold px-2.5 py-1 rounded-full">Preview</div>
                    </div>
                    <p className="text-[13px] font-bold text-gray-900">{rooms[0]?.name} 🏨</p>
                    <div className="flex items-center justify-between mt-2 text-[11px] text-gray-400">
                      <span>📍 Sep 12 &bull; 10:00 - 10:15</span>
                      <span className="text-purple-600 font-semibold cursor-pointer hover:underline">View Details</span>
                    </div>
                  </div>

                  {/* Support Chat */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-[15px] font-bold text-gray-900 flex items-center gap-2">💬 Support Chat</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-[12px] font-semibold text-purple-600">Concierge</div>
                        <p className="text-[12px] text-gray-600 bg-purple-50 rounded-lg px-3 py-2 mt-1">Your booking for Ocean View is confirmed! Check-in is at 3 PM.</p>
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold text-purple-600">Concierge</div>
                        <p className="text-[12px] text-gray-600 bg-purple-50 rounded-lg px-3 py-2 mt-1">Would you like to add breakfast to your stay?</p>
                      </div>
                      <div className="flex justify-end">
                        <p className="text-[12px] text-gray-600 bg-gray-100 rounded-lg px-3 py-2">Yes please! 🔥</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-50">
                      <input type="text" placeholder="Message Here..." className="flex-1 text-[12px] bg-transparent outline-none placeholder:text-gray-400" />
                      <button className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-sm hover:bg-purple-700 transition-colors">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — Calendar + Stats + Notes */}
              <div className="col-span-12 xl:col-span-4 flex flex-col gap-5">
                {/* Calendar */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[15px] font-bold text-gray-900 flex items-center gap-2">📅 Calendar</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-gray-600">Sep</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <div key={d} className="text-[11px] font-semibold text-gray-400 text-center py-1">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day) => {
                      const isToday = day === today;
                      const isHighlight = [12, 13, 25, 26, 27].includes(day);
                      const isWeekend = [1, 2, 3].includes(day);
                      return (
                        <div key={day} className={`w-full aspect-square flex items-center justify-center rounded-lg text-[12px] font-medium cursor-pointer transition-colors ${isToday ? "bg-purple-600 text-white shadow-sm shadow-purple-200" : isHighlight ? "bg-gradient-to-br from-orange-300 to-pink-300 text-white" : isWeekend ? "text-pink-500" : "text-gray-700 hover:bg-gray-50"}`}>
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 rounded-2xl border border-purple-100 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[15px]">⏱</span>
                    <h3 className="text-[15px] font-bold text-gray-900">Quick Stats</h3>
                  </div>
                  <div className="text-[42px] font-bold text-gray-900 leading-none tracking-tight text-center my-4">
                    {rooms.length}<span className="text-[16px] text-gray-400 ml-1">Hotels</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="bg-white/70 rounded-xl p-3 text-center">
                      <div className="text-[20px] font-bold text-purple-600">2</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">Booked</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 text-center">
                      <div className="text-[20px] font-bold text-pink-600">3</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">Saved</div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[15px]">📝</span>
                    <h3 className="text-[15px] font-bold text-gray-900">Notes</h3>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed">Check-in at Ocean View Lounge &amp; confirm Sunrise Suite booking before Sep 14 🔥</p>
                  <p className="text-[11px] text-gray-400 mt-3">Today</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Booking Modal */}
      {selectedRoom && (
        <BookingModal room={selectedRoom} onClose={handleCloseModal} />
      )}
    </ProtectedRoute>
  );
}
