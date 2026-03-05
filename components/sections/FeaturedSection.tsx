import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";

export default function FeaturedSection() {
  return (
    <SectionContainer id="featured" className="py-16 lg:py-20">

      {/* Block 1: Image Left, Text Right */}
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        {/* Left Image */}
        <div className="relative w-full lg:w-[55%] shrink-0">
          {/* Tags */}
          <div className="absolute left-6 top-6 z-10 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-gray-900 shadow-sm">Video</span>
            <span className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-bold text-white shadow-sm">Interior</span>
            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-gray-900 shadow-sm">Luxury Hotel</span>
          </div>

          <div className="relative h-[400px] sm:h-[480px] w-full overflow-hidden rounded-[2.5rem]">
            <Image
              src="/Whisk_19.jpeg"
              alt="Luxury Hotel Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col items-start w-full lg:w-[45%] lg:pl-16">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Comfortable rooms with excellent care
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-500 max-w-lg">
            On top of the beautiful setting, we offer luxurious and various bookings tailored perfectly to your lifestyle options.
          </p>

          <div className="mt-12 flex w-full flex-col sm:flex-row items-center justify-between gap-8">
            <button className="flex items-center gap-3 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-black w-full sm:w-auto justify-center">
              Learn Details
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>

            <div className="flex items-center gap-5">
              <span className="text-sm font-semibold tracking-widest text-gray-500">01 / 05</span>
              <div className="flex gap-2">
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-gray-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-black">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Text Left, Image Right */}
      <div className="mt-32 flex flex-col-reverse gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Text */}
        <div className="flex flex-col items-start w-full lg:w-[45%]">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            Discover Excellence in Hospitality, Trusted Hotels You Can Rely On
          </h2>

          <div className="mt-8 flex">
            <div className="inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-300 px-10 py-3 transition-colors hover:bg-gray-50">
              <svg className="h-4 w-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Image/Content */}
        <div className="relative w-full lg:w-[45%] flex">
          <div className="flex flex-col sm:flex-row gap-8 items-start lg:items-end lg:ml-auto">

            <div className="relative w-full sm:w-[320px] h-[360px] shrink-0">

              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/Whisk_8.jpeg"
                  alt="Nature Resort"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full sm:max-w-[200px] flex flex-col gap-5 sm:pb-8">
              <div className="flex items-center text-gray-900">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-sm font-medium leading-relaxed text-gray-600">
                On top we have provided comprehensive and a large range of services – from modern rooms, and seasonal experiences to VIP bookings.
              </p>
            </div>
          </div>
        </div>
      </div>

    </SectionContainer>
  );
}
