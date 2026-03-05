"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import BookingModal from "@/components/rooms/BookingModal";
import { getRooms } from "@/services/roomService";
import { Room } from "@/types/room";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function HotelsPage() {
    const rooms = useMemo(() => getRooms(), []);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");
    const [bookingRoom, setBookingRoom] = useState<Room | null>(null);
    const [showMobileDetail, setShowMobileDetail] = useState(false);

    const categories = [
        { id: "all", label: "Near You" },
        { id: "trending", label: "Trending" },
        { id: "stars", label: "Stars Hotel" },
    ];

    // Default select first room
    const displayRoom = selectedRoom || rooms[0];

    const amenities = [
        { icon: "🍳", label: "Kitchen" },
        { icon: "📶", label: "Wifi" },
        { icon: "💻", label: "Dedicated workspace" },
        { icon: "📺", label: "TV" },
        { icon: "🏊", label: "Pool" },
        { icon: "⚡", label: "EV charger" },
        { icon: "🛗", label: "Elevator" },
        { icon: "🅿️", label: "Free parking" },
    ];

    return (
        <ProtectedRoute>
            <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden">

                <Sidebar />

                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                    <DashboardHeader />

                    {/* Main Content: Split Panel */}
                    <div className="flex-1 flex overflow-hidden">

                        {/* LEFT PANEL — Hotel List */}
                        <div className={`w-full md:w-[320px] h-full flex-shrink-0 border-r border-gray-100 bg-white overflow-y-auto ${showMobileDetail ? 'hidden md:block' : 'block'}`}>

                            {/* Category Tabs */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-50">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all ${activeCategory === cat.id
                                            ? "bg-gray-900 text-white shadow-sm"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* Section Label */}
                            <div className="px-4 pt-4 pb-2">
                                <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">
                                    {activeCategory === "all" ? "Near You" : activeCategory === "trending" ? "Trending" : "Stars Hotel"}
                                </p>
                            </div>

                            {/* Hotel Cards Stack */}
                            <div className="px-4 pb-4 space-y-4">
                                {rooms.map((room) => (
                                    <div
                                        key={room.id}
                                        onClick={() => {
                                            setSelectedRoom(room);
                                            setShowMobileDetail(true);
                                        }}
                                        className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all group ${displayRoom?.id === room.id ? "ring-2 ring-purple-400 shadow-md" : "hover:shadow-md"
                                            }`}
                                    >
                                        <div className="relative aspect-[16/10] w-full">
                                            <Image
                                                src={room.image}
                                                alt={room.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="320px"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            <div className="absolute bottom-3 left-3 text-white">
                                                <h4 className="text-[14px] font-bold leading-tight">{room.name}</h4>
                                                <p className="text-[11px] text-white/80 mt-0.5">{room.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT PANEL — Hotel Detail View */}
                        <div className={`flex-1 overflow-y-auto ${showMobileDetail ? 'block' : 'hidden md:block'}`}>
                            {displayRoom && (
                                <div className="min-h-full">
                                    {/* Mobile Back Button */}
                                    <div className="md:hidden absolute top-4 left-4 z-50">
                                        <button
                                            onClick={() => setShowMobileDetail(false)}
                                            className="w-10 h-10 bg-white/90 backdrop-blur-md text-gray-900 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors border border-gray-200"
                                        >
                                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                    </div>

                                    {/* Hero Image */}
                                    <div className="relative h-[360px] w-full">
                                        <Image
                                            src={displayRoom.image}
                                            alt={displayRoom.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1200px) 100vw, 60vw"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                        {/* Overlay Content */}
                                        <div className="absolute bottom-6 left-8 text-white">
                                            <div className="flex items-center gap-1 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                ))}
                                            </div>
                                            <h1 className="text-[32px] font-bold leading-tight">{displayRoom.name}</h1>
                                            <div className="flex items-center gap-2 mt-1 text-white/80 text-[14px]">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                                {displayRoom.location}
                                            </div>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="bg-white/20 backdrop-blur-sm text-white text-[12px] font-bold px-3 py-1 rounded-full">
                                                    ⭐ {displayRoom.rating} Rating
                                                </span>
                                                <span className="bg-white/20 backdrop-blur-sm text-white text-[12px] font-bold px-3 py-1 rounded-full">
                                                    84 Reviews
                                                </span>
                                            </div>
                                        </div>

                                        {/* Start from badge */}
                                        <div className="absolute bottom-6 right-8">
                                            <div className="bg-white text-gray-900 font-bold text-[14px] px-4 py-2 rounded-full shadow-lg">
                                                Start from <span className="text-purple-600">${displayRoom.price}</span>
                                            </div>
                                        </div>

                                        {/* Navigation category pills */}
                                        <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end max-w-[60%]">
                                            {["Room", "Building", "Bathroom", "Lobby", "Restaurant", "Pool", "Lounge"].map((cat) => (
                                                <span key={cat} className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Detail Content Below Hero */}
                                    <div className="p-4 md:p-8">
                                        <div className="flex flex-col lg:flex-row gap-8">

                                            {/* Left Detail */}
                                            <div className="flex-1">
                                                {/* Tabs */}
                                                <div className="flex items-center gap-1 mb-6">
                                                    {["About", "Facilities", "Attraction", "Testimonial"].map((tab, i) => (
                                                        <button
                                                            key={tab}
                                                            className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all ${i === 0
                                                                ? "bg-gray-900 text-white shadow-sm"
                                                                : "text-gray-500 hover:bg-gray-100"
                                                                }`}
                                                        >
                                                            {tab}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Description */}
                                                <h2 className="text-[20px] font-bold text-gray-900 mb-3">Description</h2>
                                                <p className="text-[14px] text-gray-600 leading-relaxed">{displayRoom.description}</p>
                                                <p className="text-[14px] text-gray-600 leading-relaxed mt-3">
                                                    This exquisite property offers a harmonious blend of luxury and comfort. Featuring modern designs,
                                                    high-quality finishes, and a range of premium amenities. Guests enjoy convenient access to shopping,
                                                    dining, and entertainment options, making it an ideal choice for those seeking upscale urban living.
                                                </p>

                                                {/* Amenities */}
                                                <h2 className="text-[20px] font-bold text-gray-900 mt-8 mb-4">What this place offers</h2>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {amenities.map((a) => (
                                                        <div key={a.label} className="flex items-center gap-3 text-[14px] text-gray-700">
                                                            <span className="text-lg">{a.icon}</span>
                                                            {a.label}
                                                        </div>
                                                    ))}
                                                </div>
                                                <button className="mt-5 px-6 py-2.5 bg-purple-600 text-white text-[13px] font-semibold rounded-xl hover:bg-purple-700 transition-colors shadow-md shadow-purple-200">
                                                    Show all amenities
                                                </button>
                                            </div>

                                            {/* Right Booking Card */}
                                            <div className="w-full lg:w-[280px] flex-shrink-0">
                                                <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm sticky top-4">
                                                    {/* Price */}
                                                    <div className="mb-4">
                                                        <span className="text-[14px] text-gray-400 line-through mr-2">${Math.round(displayRoom.price * 1.3)}</span>
                                                        <span className="text-[24px] font-bold text-gray-900">${displayRoom.price}</span>
                                                        <span className="text-[13px] text-gray-500 ml-1">for 2 nights</span>
                                                    </div>

                                                    {/* Date inputs */}
                                                    <div className="space-y-3 mb-4">
                                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                            <span className="text-[12px] text-gray-500">Check in:</span>
                                                            <span className="text-[13px] font-semibold text-gray-900">13/6/2026</span>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                            <span className="text-[12px] text-gray-500">Check Out:</span>
                                                            <span className="text-[13px] font-semibold text-gray-900">15/6/2026</span>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                            <span className="text-[12px] text-gray-500">Guest:</span>
                                                            <div className="flex items-center gap-1">
                                                                <span className="text-[13px] font-semibold text-gray-900">2 Guest</span>
                                                                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Book Button */}
                                                    <button
                                                        onClick={() => setBookingRoom(displayRoom)}
                                                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-[14px] font-bold rounded-xl shadow-md shadow-purple-200 hover:shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all active:scale-[0.98]"
                                                    >
                                                        Book Now
                                                    </button>
                                                    <p className="text-[11px] text-gray-400 text-center mt-2">*You won&apos;t be charged yet</p>
                                                </div>

                                                {/* Explore More Card */}
                                                <div className="mt-5 relative rounded-2xl overflow-hidden aspect-[4/3]">
                                                    <Image
                                                        src={rooms[rooms.indexOf(displayRoom) + 1 >= rooms.length ? 0 : rooms.indexOf(displayRoom) + 1]?.image || rooms[0].image}
                                                        alt="Explore more"
                                                        fill
                                                        className="object-cover"
                                                        sizes="280px"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                                        <button className="bg-white/90 backdrop-blur-sm text-gray-900 text-[12px] font-semibold px-5 py-2 rounded-full hover:bg-white transition-colors shadow-sm">
                                                            Explore more hotels
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {bookingRoom && (
                <BookingModal room={bookingRoom} onClose={() => setBookingRoom(null)} />
            )}
        </ProtectedRoute>
    );
}
