import LandingNavbar from "@/components/sections/LandingNavbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import HotelCarouselSection from "@/components/sections/HotelCarouselSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <HotelCarouselSection />
      <CTASection />
      <TestimonialSection />
      <Footer />
    </>
  );
}

