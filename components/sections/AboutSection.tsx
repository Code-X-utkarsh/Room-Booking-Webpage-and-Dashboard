"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";

export default function AboutSection() {
  const [isSwapped, setIsSwapped] = useState(false);

  return (
    <SectionContainer id="about" className="py-16 lg:py-20 overflow-hidden">
      {/* Top Heading (centered or spanning) */}
      <div className="mb-20 text-center lg:mb-28">
        <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Explore Stays, About Comfort, Your Stay, Our Priority
        </h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
        {/* Left Column Text Content */}
        <div className="flex flex-col items-start gap-8 lg:col-span-4 lg:pr-8">
          <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-sm">
            About Us
          </span>

          <p className="text-2xl font-medium leading-relaxed tracking-tight text-gray-900 sm:text-3xl">
            Aether is a trusted platform connecting travelers with top hotels across the country
          </p>

          <Link
            href="/about"
            className="group flex items-center gap-3 rounded-full bg-zinc-900 pl-6 pr-2 py-2 text-sm font-semibold text-white transition-all hover:bg-black"
          >
            Learn More
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Right Column Images */}
        <div className="relative h-[550px] w-full sm:h-[650px] lg:col-span-8">

          {/* Main Image Base Content */}
          <div
            onClick={() => setIsSwapped(!isSwapped)}
            className={`cursor-pointer absolute transition-all duration-700 ease-in-out overflow-hidden rounded-[2.5rem] shadow-xl ${isSwapped
              ? "bottom-12 right-0 h-[300px] w-3/4 sm:h-[350px] sm:w-[55%] bg-gray-200 z-10 hover:scale-105"
              : "left-0 top-0 h-[400px] w-full sm:h-[450px] sm:w-[75%] bg-[#F4F4F5] z-20"
              }`}
          >
            <Image
              src="/modern-interior-design-interior.jpg"
              alt="Luxury Suite interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className={`absolute left-6 flex items-center justify-between transition-all duration-500 ${isSwapped ? "bottom-4 w-[calc(100%-2rem)]" : "bottom-6 w-[calc(100%-3rem)]"
              }`}>
              <div className={`flex items-center gap-2 rounded-full bg-white text-gray-900 shadow-lg ${isSwapped ? "px-3 py-2 text-xs font-bold" : "px-4 py-2.5 text-sm font-bold"
                }`}>
                <svg className={`text-[#2C7FFF] ${isSwapped ? "h-3 w-3" : "h-4 w-4"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                NYC, United States
              </div>
              <div className={`flex cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105 ${isSwapped ? "h-8 w-8" : "h-10 w-10"
                }`}>
                <svg className={isSwapped ? "h-4 w-4" : "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Secondary Image Base Content */}
          <div
            onClick={() => setIsSwapped(!isSwapped)}
            className={`cursor-pointer absolute transition-all duration-700 ease-in-out overflow-hidden rounded-[2.5rem] shadow-xl ${isSwapped
              ? "left-0 top-0 h-[400px] w-full sm:h-[450px] sm:w-[75%] bg-[#F4F4F5] z-20"
              : "bottom-12 right-0 h-[300px] w-3/4 sm:h-[350px] sm:w-[55%] bg-gray-200 z-10 hover:scale-105"
              }`}
          >
            <Image
              src="/indoor-design-luxury-resort.jpg"
              alt="Ocean view room"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className={`absolute left-6 flex items-center justify-between transition-all duration-500 ${isSwapped ? "bottom-6 w-[calc(100%-3rem)]" : "bottom-4 w-[calc(100%-2rem)]"
              }`}>
              <div className={`flex items-center gap-2 rounded-full bg-white text-gray-900 shadow-lg ${isSwapped ? "px-4 py-2.5 text-sm font-bold" : "px-3 py-2 text-xs font-bold"
                }`}>
                <svg className={`text-[#2C7FFF] ${isSwapped ? "h-4 w-4" : "h-3 w-3"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Maldives, South Asia
              </div>
              <div className={`flex cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105 ${isSwapped ? "h-10 w-10" : "h-8 w-8"
                }`}>
                <svg className={isSwapped ? "h-5 w-5" : "h-4 w-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SectionContainer>
  );
}
