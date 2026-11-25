import type { Metadata } from "next";
import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import GetInTouchSection from "@/components/GetInTouchSection";

export const metadata: Metadata = {
  title: "Projects - Anchor Garage Door and Gate Services, Inc",
};

const galleryImages = Array.from({ length: 61 }, (_, i) => i + 1);

export default function ProjectsPage() {
  return (
    <>
      <InnerHero
        title="Projects"
        description="Our projects highlight quality, reliability, and licensed expertise in garage doors, gates, and activating devices, ensuring customer satisfaction every time."
        image="/images/3rd.webp"
      />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {galleryImages.map((n) => (
            <div key={n} className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-light">
              <Image
                src={`/images/projects/Garage-DoorGate-Services-${n}.jpg`}
                alt={`Garage Door & Gate Services ${n}`}
                width={700}
                height={1100}
                className="h-auto w-full object-cover transition hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <GetInTouchSection />
    </>
  );
}
