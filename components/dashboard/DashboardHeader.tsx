"use client";

import { useAuth } from "@/context/AuthContext";
import { useSidebar } from "@/context/SidebarContext";
import Link from "next/link";

export default function DashboardTopBar() {
    const { user } = useAuth();
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useSidebar();

    return (
        <header className="h-[64px] bg-white border-b border-gray-100 flex items-center justify-between px-6 flex-shrink-0">

            <div className="flex items-center gap-4 flex-1">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shrink-0"
                    aria-label="Open menu"
                >
                    <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Search */}
                <div className="flex-1 max-w-[480px]">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-[13px] rounded-lg focus:ring-purple-500 focus:border-purple-500 block pl-9 pr-4 py-2 outline-none transition-all placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                {/* Home link */}
                <Link
                    href="/"
                    className="flex items-center justify-center px-4 py-1.5 rounded-lg bg-gray-100 text-[13px] font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
                >
                    Home
                </Link>

                {/* Dark mode toggle (visual only) */}
                <button className="hidden md:flex w-8 h-8 rounded-full bg-gray-900 items-center justify-center text-yellow-400 hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                </button>

                {/* Phone */}
                <button className="hidden md:flex w-8 h-8 rounded-full bg-gray-100 items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </button>

                {/* Notifications */}
                <button className="hidden md:flex relative w-8 h-8 rounded-full bg-gray-100 items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                    <span className="absolute -top-0.5 -right-0.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </button>

                {/* User avatar + name */}
                <div className="hidden md:flex items-center gap-2 ml-2 pl-3 border-l border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                        {user?.name?.[0]?.toUpperCase() || "U"}
                    </div>
                    <span className="text-[13px] font-semibold text-gray-900 hidden lg:block">{user?.name || "User"}</span>
                </div>
            </div>

        </header>
    );
}
