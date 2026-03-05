"use client";

import { useState } from "react";

export default function FiltersPanel({ className = "" }: { className?: string }) {
    const [priceRange, setPriceRange] = useState(500);

    return (
        <div className={`bg-white rounded-[16px] border border-[#E6EAF0] p-6 flex flex-col gap-8 shadow-[0_4px_12px_rgba(0,0,0,0.02)] ${className}`}>

            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-medium text-[#0F172A]">Filters</h2>
                <button className="text-[14px] font-medium text-[#2563EB] hover:text-blue-700 transition-colors">Clear all</button>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="text-[14px] font-semibold text-[#0F172A] mb-4">Price Range</h3>
                <input
                    type="range"
                    min="50"
                    max="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#E6EAF0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex items-center justify-between mt-3 text-[14px] font-medium text-[#64748B]">
                    <span>$50</span>
                    <span className="text-[#0F172A] font-semibold">${priceRange}</span>
                </div>
            </div>

            <hr className="border-[#E6EAF0]" />

            {/* Star Rating */}
            <div>
                <h3 className="text-[14px] font-semibold text-[#0F172A] mb-4">Star Rating</h3>
                <div className="flex gap-2">
                    {[3, 4, 5].map((stars) => (
                        <button
                            key={stars}
                            className="flex-1 py-1.5 bg-white border border-[#E6EAF0] rounded-xl text-[14px] font-medium text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        >
                            {stars} <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        </button>
                    ))}
                </div>
            </div>

            <hr className="border-[#E6EAF0]" />

            {/* Property Type */}
            <div>
                <h3 className="text-[14px] font-semibold text-[#0F172A] mb-4">Property Type</h3>
                <div className="flex flex-col gap-3.5 text-[14px] text-[#64748B]">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" defaultChecked />
                        <span className="group-hover:text-[#0F172A] transition-colors">Hotels</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" />
                        <span className="group-hover:text-[#0F172A] transition-colors">Apartments</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" />
                        <span className="group-hover:text-[#0F172A] transition-colors">Resorts</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" />
                        <span className="group-hover:text-[#0F172A] transition-colors">Villas</span>
                    </label>
                </div>
            </div>

            <hr className="border-[#E6EAF0]" />

            {/* Popular Filters */}
            <div>
                <h3 className="text-[14px] font-semibold text-[#0F172A] mb-4">Popular Amenities</h3>
                <div className="flex flex-col gap-3.5 text-[14px] text-[#64748B]">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" defaultChecked />
                        <span className="group-hover:text-[#0F172A] transition-colors">Free WiFi</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" defaultChecked />
                        <span className="group-hover:text-[#0F172A] transition-colors">Swimming Pool</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" />
                        <span className="group-hover:text-[#0F172A] transition-colors">Parking</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-[18px] h-[18px] text-[#2563EB] border-[#E6EAF0] rounded focus:ring-[#2563EB] transition-all" />
                        <span className="group-hover:text-[#0F172A] transition-colors">Fitness Center</span>
                    </label>
                </div>
            </div>

        </div>
    );
}
