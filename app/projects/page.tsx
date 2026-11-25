import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import GetInTouchSection from "@/components/GetInTouchSection";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects - Anchor Garage Door and Gate Services, Inc",
};

const galleryOrder = [
  1, 22, 31, 30, 41, 4, 33, 43, 45, 40, 16, 53, 21, 24, 14, 25, 9, 18, 38, 15, 12, 52, 54, 37, 55, 13,
  3, 20, 50, 29, 8, 58, 10, 44, 32, 59, 2, 26, 7, 48, 23, 46, 35, 56, 60, 11, 19, 36, 28, 57, 5, 34,
  6, 51, 61, 42, 17, 47, 49, 27, 39,
];

const portraitProjects = new Set([1, 22, 4, 16, 21, 24, 14, 9, 18, 15, 12, 13, 3, 20, 8, 10, 2, 7, 23, 11, 19, 5, 6, 17]);

const galleryImages = galleryOrder.map((n) => ({
  n,
  width: portraitProjects.has(n) ? 700 : 1100,
  height: portraitProjects.has(n) ? 1100 : 700,
}));

export default function ProjectsPage() {
  return (
    <>
      <InnerHero
        title="Projects"
        description="Our projects highlight quality, reliability, and licensed expertise in garage doors, gates, and activating devices, ensuring customer satisfaction every time."
        image="/images/3rd.webp"
      />

      <section className="my-[60px] px-5 py-[10px] max-lg:my-[60px] max-lg:px-[10px] max-md:my-10">
        <ProjectGallery images={galleryImages} />
      </section>

      <GetInTouchSection />
    </>
  );
}
