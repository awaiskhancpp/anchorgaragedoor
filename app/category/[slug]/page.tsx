import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCardGrid from "@/components/BlogCardGrid";
import GetInTouchSection from "@/components/GetInTouchSection";
import InnerHero from "@/components/InnerHero";
import { blogPosts, type BlogPost } from "@/lib/blogPosts";

const categories: Record<BlogPost["category"], string> = {
  "door-installation": "Door Installation",
  "overhead-doors": "Overhead Doors",
};

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const name = categories[slug as BlogPost["category"]];
  return name ? { title: `${name} - Anchor Garage Door and Gate Services, Inc` } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as BlogPost["category"]];

  if (!category) notFound();

  const posts = blogPosts.filter((post) => post.category === slug);

  return (
    <>
      <InnerHero title={category} image="/images/body-access-control-installation.webp" />

      <section className="px-5 pb-10 pt-20">
        <div className="mx-auto max-w-[1320px]">
          <BlogCardGrid posts={posts} />
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <GetInTouchSection />
      </section>
    </>
  );
}
