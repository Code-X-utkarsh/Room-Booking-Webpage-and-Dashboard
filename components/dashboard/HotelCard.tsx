"use client";

import { memo } from "react";
import Image from "next/image";
import { Room } from "@/types/room";

interface HotelCardProps {
    room: Room;
    onBook: (room: Room) => void;
}

function HotelCardInner({ room, onBook }: HotelCardProps) {
    return (
        <div
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all group"
            onClick={() => onBook(room)}
        >
            {/* Hotel Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                />
            </div>
            <div className="p-4">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                        🔥 {room.tag}
                    </span>
                    <span className="bg-pink-100 text-pink-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                        ⭐ {room.rating}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            // Mock favorite toggle action
                        }}
                        className="ml-auto w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>
                </div>
                <h3 className="text-[16px] font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {room.name}
                </h3>
                <p className="text-[12px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {room.description}
                </p>
                {/* Avatars */}
                <div className="flex items-center mt-4">
                    <div className="flex -space-x-2">
                        {["#8B5CF6", "#F59E0B", "#EC4899"].map((color, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 rounded-full border-2 border-white text-white text-[9px] font-bold flex items-center justify-center"
                                style={{ backgroundColor: color }}
                            >
                                {String.fromCharCode(65 + i)}
                            </div>
                        ))}
                    </div>
                    <span className="text-[11px] text-gray-400 ml-2">+{room.capacity}</span>
                </div>
                {/* Meta */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1 truncate max-w-[40%]">📍 {room.location.split(",")[0]}</span>
                    <span className="flex items-center gap-1 hidden sm:flex">👥 Up to {room.capacity}</span>
                    <span className="flex items-center gap-1 font-semibold text-gray-900">💰 ${room.price}/night</span>
                </div>
            </div>
        </div>
    );
}

const HotelCard = memo(HotelCardInner);
HotelCard.displayName = "HotelCard";

export default HotelCard;
