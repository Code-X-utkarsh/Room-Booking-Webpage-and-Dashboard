import Link from "next/link";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";

const PARTNERS = [
  { name: "Trustpilot", logo: "/partners/Trustpilot_Logo_(2022).svg" },
  { name: "OYO", logo: "/partners/Oyorooms-branding.svg" },
  { name: "Airbnb", logo: "/partners/airbnb-ar21.svg" },
  { name: "Amazon", logo: "/partners/Amazon_logo.svg" },
  { name: "Booking.com", logo: "/partners/Booking.com_logo.svg" },
  { name: "Expedia", logo: "/partners/Expedia_Logo_2023.svg" },
  { name: "Agoda", logo: "/partners/Agoda_Logo_2022.svg" },
  { name: "MakeMyTrip", logo: "/partners/Makemytrip_logo.svg" },
];

export default function CTASection() {
  return (
    <SectionContainer id="cta" className="py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="mb-6 rounded-full border border-gray-100 bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-sm">
          Explore Hotel
        </span>
        <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[4rem]">
          Trusted Stays, Seamless Booking —<br /> Explore Now!
        </h2>

        <p className="mt-8 text-sm font-medium text-gray-500 max-w-lg mx-auto">
          Discover properties that suit your journey – whether business or ultimate comfort.
        </p>

        <Link
          href="/login"
          className="mt-10 flex items-center justify-center gap-4 rounded-full bg-zinc-900 pl-8 pr-3 py-3 text-sm font-semibold text-white transition-all hover:bg-black w-fit mx-auto"
        >
          Get started
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
        <p className="mt-5 text-sm font-semibold text-gray-400">Join over 1M+ active users</p>
      </div>

      {/* Partner Logos Marquee */}
      <div className="relative mt-24 flex w-full max-w-6xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex w-[160px] shrink-0 items-center justify-center transition-all hover:scale-105 md:w-[200px] px-8">
              <div className="relative h-10 w-full sm:h-12">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Masonry Image Gallery */}
      <div className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-6 items-center">
        {/* Img 1 */}
        <div className="relative h-[200px] w-full overflow-hidden rounded-[2rem] md:col-span-1 lg:h-[240px]">
          <Image src="/lobby.jpeg" alt="Lobby" fill className="object-cover" />
        </div>
        {/* Img 2 */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-[2.5rem] md:col-span-1 lg:-mt-16 lg:h-[320px]">
          <Image src="/facede.jpeg" alt="Facade" fill className="object-cover" />
        </div>
        {/* Img 3 (Center) */}
        <div className="relative h-[250px] w-full overflow-hidden rounded-[2.5rem] shadow-xl md:col-span-2 lg:col-span-1 lg:mt-8 lg:h-[280px]">
          <Image src="/Whisk_1b3.jpeg" alt="Lounge" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
            <span className="text-white font-medium text-sm leading-relaxed">Join our community of travelers and experience unforgettable stays.</span>
            <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 cursor-pointer">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
        {/* Img 4 */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-[2.5rem] md:col-span-1 lg:-mt-12 lg:h-[320px]">
          <Image src="/bedroom.jpeg" alt="Bedroom" fill className="object-cover" />
        </div>
        {/* Img 5 */}
        <div className="relative h-[200px] w-full overflow-hidden rounded-[2rem] md:col-span-1 lg:mt-20 lg:h-[240px]">
          <Image src="/dining.jpeg" alt="Dining" fill className="object-cover" />
        </div>
      </div>
    </SectionContainer>
  );
}
