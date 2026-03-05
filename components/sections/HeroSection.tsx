"use client";

import Link from "next/link";
import Image from "next/image";

const HERO_IMAGE_URL = "/whisk_9.jpeg";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-28 pb-4 sm:pt-32">
      {/* Container bounding the inset image */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Main Image Block with extreme rounded corners */}
        <div className="relative flex flex-col items-center justify-center gap-12 lg:gap-24 min-h-[750px] lg:min-h-[850px] w-full overflow-hidden rounded-[4rem] sm:rounded-[4rem] lg:rounded-[4.5rem] shadow-2xl py-16 lg:py-24">
          <Image
            src={HERO_IMAGE_URL}
            alt="Luxury Hotel Ocean Sunset View"
            fill
            className="object-cover"
            priority
          />

          {/* Radial Gradient overlay to ensure text readability exactly like the design */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

          {/* Centered Typography */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center mt-8 lg:mt-16">
            <h1 className="mx-auto max-w-5xl text-[2.25rem] sm:text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-white lg:text-[4.5rem]">
              Discover Top Hotels, Compare Deals, And Book Your Perfect Stay
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base font-medium leading-relaxed text-white/90 sm:text-lg">
              Search trusted hotels for unforgettable stays and hassle-free bookings. Find the best hotels near you in seconds with ease and confidence!
            </p>
          </div>

          {/* Search Box Float */}
          <div className="relative z-10 w-full px-4 sm:px-8 max-w-[1100px] mx-auto mt-auto">
            <div className="w-full rounded-[1.5rem] lg:rounded-[2rem] bg-white/20 backdrop-blur-2xl border border-white/30 p-5 shadow-xl sm:p-6 lg:px-10 lg:py-8">
              <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {/* Location */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-semibold text-white px-2">
                    Location
                  </label>
                  <div className="flex cursor-pointer items-center justify-between rounded-xl px-2 py-1 transition-colors hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-medium text-white/90">Lisbon, Portugal</span>
                    </div>
                    <svg className="h-4 w-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Type */}
                <div className="relative flex flex-col gap-3 lg:after:absolute lg:after:-left-4 lg:after:top-2 lg:after:h-12 lg:after:w-px lg:after:bg-white/20">
                  <label className="px-2 text-sm font-semibold text-white lg:pl-6">
                    Type
                  </label>
                  <div className="flex cursor-pointer items-center justify-between rounded-xl px-2 py-1 transition-colors hover:bg-white/10 lg:pl-6">
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-sm font-medium text-white/90">Minimalist</span>
                    </div>
                    <svg className="h-4 w-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Price */}
                <div className="relative flex flex-col gap-3 lg:after:absolute lg:after:-left-4 lg:after:top-2 lg:after:h-12 lg:after:w-px lg:after:bg-white/20">
                  <label className="px-2 text-sm font-semibold text-white lg:pl-6">
                    Price
                  </label>
                  <div className="flex cursor-pointer items-center justify-between rounded-xl px-2 py-1 transition-colors hover:bg-white/10 lg:pl-6">
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-white/90">10,000 - 12,000</span>
                    </div>
                    <svg className="h-4 w-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex h-14 lg:pl-4">
                  <Link
                    href="/dashboard"
                    className="flex w-full items-center justify-center rounded-[1.25rem] bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl"
                  >
                    Search Hotel
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
