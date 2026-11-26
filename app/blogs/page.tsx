import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import BlogCardGrid from "@/components/BlogCardGrid";
import { blogPosts } from "@/lib/blogPosts";
import GetInTouchSection from "@/components/GetInTouchSection";

export const metadata: Metadata = {
  title: "Blogs - Anchor Garage Door and Gate Services, Inc",
};

export default function BlogsPage() {
  return (
    <>
      <InnerHero
        tabletCompact
        title="Blogs - Anchor Garage Door and Gate Services, Inc"
        image="/images/body-access-control-installation.webp"
        // secondaryTitle="Blogs"
      />

      <section className="px-5 pb-10 pt-20">
        <div className="mx-auto max-w-[1320px]">
          <BlogCardGrid posts={blogPosts} />
        </div>

      </section>
      <section className="py-14 sm:py-20"><GetInTouchSection/></section>
    </>
  );
}
