import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import { blogPosts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blogs - Anchor Garage Door and Gate Services, Inc",
};

export default function BlogsPage() {
  return (
    <>
      <InnerHero title="Blogs" image="/images/body-access-control-installation.webp" />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col overflow-hidden rounded-2xl border border-black/5">
                <Link href={`/${post.slug}`} className="block aspect-[11/7] overflow-hidden bg-light">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1100}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold">
                    <Link href={`/${post.slug}`} className="hover:text-accent">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-3 text-sm text-ink/50">{post.date}</p>
                  <p className="text-sm text-ink/70">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
