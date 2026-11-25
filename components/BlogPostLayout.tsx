import Image from "next/image";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/lib/blogPosts";
import GetInTouchSection from "@/components/GetInTouchSection";
import { EyebrowIcon, PhoneIconFilled } from "@/components/icons";

const CATEGORIES = ["Door Installation", "Overhead Doors"];

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const popularPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex h-[380px] items-center justify-center overflow-hidden text-center text-white lg:h-[460px]">
        <Image src={post.image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 relative z-10 flex flex-col items-center gap-5">
          <span className="rounded-full bg-accent px-4 py-1 text-sm">{CATEGORIES[0]}</span>
          <h1>Blog Details</h1>
          <p className="flex flex-wrap items-center justify-center gap-2 text-white/90">
            <span>Anchor Garage Door and Gate Services, Inc</span>
            <span>&#9642;</span>
            <Link href="/blogs" className="hover:underline">
              Blog
            </Link>
            <span>&#9642;</span>
            <span>{post.title}</span>
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-6 aspect-[11/7] overflow-hidden rounded-2xl bg-light">
              <Image
                src={post.image}
                alt={post.title}
                width={1100}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mb-4 flex items-center gap-3 text-sm text-ink/60">
              <span className="flex items-center gap-1.5">
                <PersonIcon />
                Admin
              </span>
              <span className="text-ink/20">|</span>
              <span className="flex items-center gap-1.5">
                <CalendarIcon />
                {post.date}
              </span>
            </div>
            <h1 className="mb-8">{post.title}</h1>
            <div className="prose-content space-y-5 text-ink/80">
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="pt-2 text-[28px]! lg:text-[32px]!">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3 key={i} className="pt-2 text-[22px]! lg:text-[24px]!">
                      {block.text}
                    </h3>
                  );
                }
                return <p key={i}>{block.text}</p>;
              })}
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <div className="flex items-center rounded-full border border-black/10">
                <input
                  type="search"
                  placeholder="Type to start searching..."
                  className="w-full rounded-full bg-transparent px-5 py-3 text-sm outline-none"
                />
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white mr-1">
                  <SearchIcon />
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-4 inline-block border-b-2 border-accent pb-2">Popular Posts</h4>
              <div className="space-y-4">
                {popularPosts.map((p) => (
                  <Link key={p.slug} href={`/${p.slug}`} className="group flex items-center gap-3">
                    <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-light">
                      <Image src={p.image} alt={p.title} width={160} height={128} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold group-hover:text-accent">{p.title}</span>
                      <span className="text-xs text-ink/50">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 inline-block border-b-2 border-accent pb-2">Categories</h4>
              <ul className="space-y-2 text-sm">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <Link href="/blogs" className="text-ink/70 hover:text-accent">
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-light p-8 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <EyebrowIcon className="h-9 w-9" />
              </span>
              <h3 className="mb-5 text-xl!">Want Your Garage Door Fix? We&apos;re Ready To Help You!</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:18333494283"
                  className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-5 py-[15px] text-center text-sm font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease lg:px-[39px] lg:py-4 lg:text-base"
                >
                  <PhoneIconFilled className="h-4 w-4" />
                  Dial Now (833) 349-4283
                </a>
                <a
                  href="/freequote"
                  className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-accent bg-transparent px-5 py-[15px] text-center text-sm font-semibold capitalize leading-none text-accent transition-[background-color,border-color,color] duration-[250ms] ease lg:px-[39px] lg:py-4 lg:text-base"
                >
                  Get Started
                </a>
              </div>
              <a href="mailto:info@anchorgaragedoor.com" className="mt-5 inline-block text-sm text-ink/60 hover:text-accent">
                info@anchorgaragedoor.com
              </a>
            </div>
          </aside>
        </div>
      </section>

      <GetInTouchSection />
    </>
  );
}

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
