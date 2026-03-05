"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useSidebar } from "@/context/SidebarContext";

export default function Sidebar() {
    const pathname = usePathname();
    const { user, logout } = useAuth();
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useSidebar();

    // Collapsible state for each workspace section
    const [activeBookingsOpen, setActiveBookingsOpen] = useState(true);
    const [savedHotelsOpen, setSavedHotelsOpen] = useState(false);
    const [pastTravelsOpen, setPastTravelsOpen] = useState(false);

    // Escape behavior for accessibility
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isMobileMenuOpen, setIsMobileMenuOpen]);

    const menuLinks = [
        {
            label: "Dashboard", href: "/dashboard", badge: "", icon: (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            )
        },
        {
            label: "Hotels", href: "/hotels", badge: "", icon: (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            )
        },
        {
            label: "My Bookings", href: "/bookings", badge: "", icon: (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            )
        },
    ];

    return (
        <>
            {/* Mobile Overlay Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-30 w-[260px] bg-white border-r border-gray-100 flex flex-col h-full flex-shrink-0 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Brand Header */}
                <div className="px-5 pt-6 pb-4">
                    <div className="flex items-center gap-3">
                        <svg className="h-7 w-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[16px] font-bold tracking-tight text-gray-900">Aether</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 px-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                            {user?.name?.[0]?.toUpperCase() || "U"}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-[13px] font-bold text-gray-900 truncate">{user?.name || "User"}</h3>
                            <p className="text-[11px] text-gray-400">Private</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>

                {/* Menu Section */}
                <div className="px-5 mt-2">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Menu</p>
                    <nav className="flex flex-col gap-1">
                        {menuLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 group ${isActive
                                        ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md shadow-purple-200"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                >
                                    <span className={isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"}>
                                        {link.icon}
                                    </span>
                                    <span className="flex-1">{link.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Workspace Section */}
                <div className="px-5 mt-8">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Workspace</p>
                        <button className="w-5 h-5 rounded flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </button>
                    </div>
                    <div className="space-y-1">

                        {/* Active Bookings — collapsible */}
                        <div>
                            <button
                                onClick={() => setActiveBookingsOpen(!activeBookingsOpen)}
                                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-50 border border-purple-100 transition-colors hover:bg-purple-100"
                            >
                                <svg
                                    className={`w-4 h-4 text-purple-500 transition-transform duration-200 ${activeBookingsOpen ? "rotate-180" : "rotate-0"}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <span className="text-[13px] font-semibold text-purple-700">Active Bookings</span>
                            </button>
                            {activeBookingsOpen && (
                                <div className="pl-8 mt-1 space-y-0.5">
                                    <p className="text-[12px] text-gray-500 py-1 truncate">Sunrise Suite — Sep 14</p>
                                    <p className="text-[12px] text-white bg-purple-500 rounded px-2 py-1 truncate">Ocean View — Sep 18</p>
                                </div>
                            )}
                        </div>

                        {/* Saved Hotels — collapsible */}
                        <div>
                            <button
                                onClick={() => setSavedHotelsOpen(!savedHotelsOpen)}
                                className="w-full flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${savedHotelsOpen ? "rotate-180" : "rotate-0"}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <span className="text-[13px]">Saved Hotels</span>
                            </button>
                            {savedHotelsOpen && (
                                <div className="pl-8 mt-1 space-y-0.5">
                                    <p className="text-[12px] text-gray-500 py-1 truncate">Sunrise Suite</p>
                                    <p className="text-[12px] text-gray-500 py-1 truncate">Ocean View Lounge</p>
                                    <p className="text-[12px] text-gray-500 py-1 truncate">Executive Boardroom</p>
                                </div>
                            )}
                        </div>

                        {/* Past Travels — collapsible */}
                        <div>
                            <button
                                onClick={() => setPastTravelsOpen(!pastTravelsOpen)}
                                className="w-full flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${pastTravelsOpen ? "rotate-180" : "rotate-0"}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <span className="text-[13px]">Past Travels</span>
                            </button>
                            {pastTravelsOpen && (
                                <div className="pl-8 mt-1 space-y-0.5">
                                    <p className="text-[12px] text-gray-500 py-1 truncate">Maldives Resort — Mar 2025</p>
                                    <p className="text-[12px] text-gray-500 py-1 truncate">Bali Villa — Dec 2024</p>
                                    <p className="text-[12px] text-gray-500 py-1 truncate">Dubai Hotel — Aug 2024</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Premium Logout Section */}
                <div className="px-5 pb-6">
                    {/* Mobile Quick Actions */}
                    <div className="flex items-center justify-around mb-4 md:hidden">
                        <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-yellow-400 hover:scale-105 transition-transform shadow-sm">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors shadow-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </button>
                        <button className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors shadow-sm">
                            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 mb-3 border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                                {user?.name?.[0]?.toUpperCase() || "U"}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[12px] font-bold text-gray-900 truncate">{user?.name || "User"}</p>
                                <p className="text-[10px] text-gray-400 truncate">{user?.email || "user@aether.com"}</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => { logout(); window.location.href = "/"; }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 hover:border-red-200 hover:shadow-sm active:scale-[0.98] transition-all"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Log Out
                    </button>
                </div>
            </aside>
        </>
    );
}
