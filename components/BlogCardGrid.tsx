import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogPosts";

export default function BlogCardGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 min-[1025px]:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="flex min-w-0 gap-5 overflow-hidden rounded-[20px] border border-black/[0.13] p-[10px] shadow-[0_0_4px_rgba(0,0,0,0.1)] max-md:flex-col"
        >
          <Link href={`/${post.slug}`} tabIndex={-1} className="h-full w-2/5 shrink-0 max-md:h-auto max-md:mb-5 max-md:w-full">
            <div className="relative aspect-[1.22] w-full overflow-hidden rounded-[10px] max-md:aspect-[5/3]">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
          </Link>
          <div className="flex min-w-0 flex-1 flex-col justify-center max-md:pb-2">
            <h3 className="mb-[10px] text-[20px] font-bold leading-[24px]">
              <Link href={`/${post.slug}`} className="hover:text-accent">
                {post.title}
              </Link>
            </h3>
            <p className="mb-[15px] text-[14px] leading-[18.2px] text-[#adadad]">{post.date}</p>
            <p className="mb-[10px] text-[17px] leading-[25.5px] text-[#333]">{post.excerpt}</p>
            <Link
              href={`/${post.slug}`}
              aria-label={`Read more about ${post.title}`}
              className="text-[14px] font-bold leading-[25.5px] text-accent hover:text-ink"
            >
              Read More »
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
