import ServiceSection from "@/components/ServiceSection";
import BrandGallery from "@/components/BrandGallery";
import TrustFeatures from "@/components/TrustFeatures";
import ScheduleRequestSection from "@/components/ScheduleRequestSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import HomeHero from "@/components/HomeHero";
import TestimonialStatsSection from "@/components/TestimonialStatsSection";
import { garageServices, gateServices, garageBrandLogos, gateBrandLogos } from "@/lib/services";

const garageTrust = [
  {
    title: "Personalized Service",
    text: "We’re not a fan of the cookie-cutter approach. If your garage door or gate needs are a little bit different, that’s cool.",
  },
  {
    title: "You can Trust Us",
    text: "We have been trusted by thousands of local residents to repair and maintain their home and ensure their personal safety.",
  },
  {
    title: "Results are Closer than You Think",
    text: "Our expansive team is just around the corner and is on call 24/7 for garage door and gate security emergencies.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <ScheduleRequestSection />

      <ServiceSection
        id="scroll-down"
        eyebrow="GARAGE DOOR INSTALLATION & REPAIR"
        description="We prioritize speed and efficiency without compromising on quality. Let us handle all your garage door needs, from minor repairs to full installations."
        items={garageServices}
      />

      <BrandGallery title="Garage Door" logos={garageBrandLogos} />

      <TrustFeatures heading="What we do" items={garageTrust} />

      <ServiceSection
        eyebrow="GATE SERVICES"
        description="From stylish gates to advanced access control systems, we deliver fast and professional results."
        items={gateServices}
      />

      <BrandGallery title="Gate Services" logos={gateBrandLogos} />

      <TestimonialStatsSection />

      <GetInTouchSection />
    </>
  );
}
