import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";

export default function TestimonialSection() {
  return (
    <SectionContainer id="testimonials" className="relative py-16 lg:py-24 overflow-hidden flex flex-col items-center justify-center">

      {/* Absolute half-circle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[300px] sm:h-[400px] lg:h-[500px] border border-gray-100 rounded-b-[1000px] bg-gradient-to-b from-gray-50/80 to-transparent -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1000px] lg:w-[1200px] h-[400px] sm:h-[500px] lg:h-[600px] border border-gray-50 rounded-b-[1200px] bg-transparent -z-20" />

      <div className="flex flex-col items-center text-center max-w-4xl px-4 mt-8">
        <span className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-bold tracking-wider text-gray-900 shadow-sm mb-12 sm:mb-16">
          <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Testimonials
        </span>

        <div className="relative">
          {/* large quote decorative icon */}
          <svg className="absolute -left-6 -top-4 sm:-left-12 sm:-top-6 h-8 w-8 sm:h-12 sm:w-12 text-gray-300 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>

          <h3 className="text-2xl font-semibold leading-relaxed tracking-tight text-gray-900 sm:text-3xl lg:text-[2.25rem] lg:leading-[1.4]">
            With our dedication and expertise in hospitality, we offer more than just a place to stay — we create a comforting journey filled with relaxation and unforgettable experiences.
          </h3>
        </div>

        {/* User Profile */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image src="/man.png" alt="Ayan Mohammad" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold text-gray-900">Ayan Jha</p>
            <p className="text-sm font-medium text-gray-500">Product Designer at Aether</p>
          </div>
        </div>

        {/* Decorative pagination dots */}
        <div className="mt-12 flex gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
          <div className="h-1.5 w-6 rounded-full bg-gray-900"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
        </div>

      </div>

    </SectionContainer>
  );
}
