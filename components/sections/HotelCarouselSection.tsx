"use client";

import Image from "next/image";
import { useRef } from "react";
import SectionContainer from "@/components/ui/SectionContainer";

const HOTELS = [
  {
    id: 1,
    name: "Crystal View Hotel",
    type: "Luxury Studio",
    price: 350,
    image: "/Whisk_11.jpeg",
  },
  {
    id: 2,
    name: "The Grand Terrace",
    type: "Premium Villa",
    price: 420,
    image: "/Whisk_e.jpeg",
  },
  {
    id: 3,
    name: "Serenity Bay Inn",
    type: "Coastal Resort",
    price: 280,
    image: "/Whisk_1c.jpeg",
  },
  {
    id: 4,
    name: "Golden Sands Resort",
    type: "Beachfront",
    price: 310,
    image: "/Whisk_92.jpeg",
  },
];

export default function HotelCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of the visible width

      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionContainer id="rooms" className="py-16 lg:py-20">
      <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b border-gray-100 pb-10 sm:flex-row lg:mb-12 lg:pb-12">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-900">
            Facilities
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Explore Best Hotel
          </h2>
        </div>

        <div className="flex w-full items-center gap-4 sm:w-auto flex-col sm:flex-row">
          <div className="relative flex w-full flex-1 items-center sm:w-64">
            <svg className="absolute left-4 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search hotel..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:bg-white sm:py-2.5"
            />
          </div>
          <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 sm:py-2.5 text-sm font-semibold text-white transition-all hover:bg-black">
            View all
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative -mx-6 lg:-mx-8">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto px-6 pb-8 pt-4 scrollbar-hide snap-x snap-mandatory lg:px-8 scroll-smooth"
        >
          {HOTELS.map((hotel) => (
            <div
              key={hotel.id}
              className="group relative h-[450px] w-[300px] shrink-0 snap-start overflow-hidden rounded-[2.5rem] sm:w-[340px] cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 300px, 340px"
              />

              {/* Top rating/like badges */}
              <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/40">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <svg className="h-3.5 w-3.5 fill-current text-white" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  4.9
                </div>
              </div>

              {/* Gradient Overlay bottom */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start gap-1">
                <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">
                  {hotel.type}
                </span>
                <div className="flex w-full items-end justify-between gap-4 mt-1">
                  <h3 className="line-clamp-2 text-2xl font-bold leading-tight text-white">
                    {hotel.name}
                  </h3>
                  <div className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#2C7FFF] text-white transition-colors hover:bg-[#1a6ae6]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators / Navigation Desktop */}
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-6 px-4 sm:flex-row lg:px-0">
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-black"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="max-w-[300px] text-center text-xs font-medium leading-relaxed text-gray-400 sm:text-right">
            Make your short trip perfect with luxurious amenities, or a relaxing getaway we take a bit towards unforgettable memories.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
