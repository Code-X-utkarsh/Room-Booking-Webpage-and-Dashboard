"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Featured", href: "#featured" },
  { label: "Rooms", href: "#rooms" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function LandingNavbar() {
  const { isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto flex max-w-[1360px] items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md ring-1 ring-gray-900/5"
          : "bg-white shadow-sm ring-1 ring-gray-200/50"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 shrink-0">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Aether
        </Link>

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-8 ml-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-900 mr-2">Get the app</span>
            {/* Apple Icon */}
            <button aria-label="Apple App Store" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.886 16.593c-1.353-.021-2.484-.81-3.238-.81-.754 0-1.884.767-3.033.788-1.508.021-2.908-.853-3.684-2.196-1.574-2.738-.403-6.804 1.129-8.98 .744-1.076 1.83-1.748 2.992-1.769 1.141-.021 2.218.746 2.992.746.774 0 2.067-.895 3.444-.768 1.487.042 2.822.618 3.597 1.768-3.076 1.875-2.581 6.273.495 7.424-.712 1.748-2.003 3.666-3.649 3.738l-.045.059zM15.02 5.5c-1.055.98-1.763 2.535-1.554 4.041 1.636.064 3.012-1.002 3.823-1.982.853-.98 1.581-2.492 1.373-4.019-1.551-.128-3.141.96-3.642 1.96z" /></svg>
            </button>
            {/* Play Store Icon */}
            <button aria-label="Google Play Store" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M3.593 1.98l10.966 6.332L2.736 20.306 3.593 1.98z" /><path d="M15.424 8.847l4.735 2.733c.961.555.961 1.464 0 2.02l-4.735 2.733-10.966 6.332 10.966-13.818z" /></svg>
            </button>
            {/* Download Icon */}
            <button aria-label="Download" className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:bg-black">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
            </button>
          </div>

          <div className="h-6 w-px bg-gray-200"></div>

          {/* Search Bar Input */}
          <div className="relative flex items-center w-48">
            <input type="text" placeholder="Search here..." className="w-full rounded-full bg-gray-100 py-2 pl-4 pr-10 text-xs font-medium text-gray-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-gray-200" />
            <button className="absolute right-3 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>

          {/* Book Now Button */}
          <Link
            href={isAuthenticated ? "/dashboard" : "/login"}
            className="flex items-center gap-2 rounded-full bg-zinc-900 pl-6 pr-2 py-2 text-sm font-semibold text-white transition-all hover:bg-black shrink-0"
          >
            {isAuthenticated ? "Go to Dashboard" : "Book Now"}
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </Link>

        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${menuOpen && i === 0
                ? "translate-y-2 rotate-45"
                : menuOpen && i === 1
                  ? "opacity-0"
                  : menuOpen && i === 2
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="pointer-events-auto mt-2 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl lg:hidden mx-auto max-w-[1360px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-semibold text-gray-700 hover:text-black"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-4">
            <Link
              href={isAuthenticated ? "/dashboard" : "/login"}
              className="block w-full rounded-full bg-zinc-900 py-3 text-center text-sm font-semibold text-white hover:bg-black"
            >
              {isAuthenticated ? "Go to Dashboard" : "Book Now"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
