import Image from "next/image";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/lib/blogPosts";
import GetInTouchSection from "@/components/GetInTouchSection";
import DialNowButton from "@/components/DialNowButton";
import { EyebrowIcon, UserCircleIcon, WordPressCalendarIcon, WordPressSearchIcon } from "@/components/icons";

const CATEGORIES = [
  { name: "Door Installation", slug: "door-installation" },
  { name: "Overhead Doors", slug: "overhead-doors" },
];

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const popularPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden text-center text-white max-lg:min-h-[60vh] max-md:min-h-[80vh]">
        <Image src={post.image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-center gap-5 px-5 sm:px-8">
          <span className="rounded-full bg-accent px-[15px] py-[3px] text-[14px]">{CATEGORIES[0].name}</span>
          <h1>Blog Details</h1>
          <p className="flex flex-wrap items-center justify-center gap-2 text-[17px] leading-[1.5] text-white/90 max-lg:text-[14px]">
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

      <section className="px-[10px] pb-5 pt-20 max-lg:pt-10 max-md:pt-10">
        <div className="mx-auto flex max-w-[1320px] flex-col lg:flex-row">
          <main className="w-full border-black/20 pb-[10px] lg:w-[70%] lg:border-r lg:pr-[30px]">
            <div className="mb-5 aspect-[11/7] overflow-hidden rounded-[20px] bg-light">
              <Image
                src={post.image}
                alt={post.title}
                width={1100}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mb-4 flex items-center gap-3 text-[14px] text-ink/70">
              <span className="flex items-center gap-1.5">
                <span className="text-accent"><UserCircleIcon /></span>
                admin
              </span>
              <span aria-hidden className="h-3 w-px bg-accent/25" />
              <span className="flex items-center gap-1.5">
                <span className="text-accent"><WordPressCalendarIcon /></span>
                {post.date}
              </span>
            </div>
            <h1 className="mb-5 text-[36px]! leading-[1.2]">{post.title}</h1>
            <div className="prose-content text-[17px] leading-[1.5] text-ink/80">
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="mb-[10px] mt-[10px] text-[32px]! leading-[1.2]">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3 key={i} className="mb-[10px] mt-[10px] text-[24px]! leading-[1.2]">
                      {block.text}
                    </h3>
                  );
                }
                return <p key={i} className="mb-[10px]">{block.text}</p>;
              })}
            </div>
          </main>

          <aside className="w-full space-y-5 pt-0 lg:w-[30%] lg:pl-5">
            <div>
              <div className="flex items-stretch overflow-hidden rounded-lg border border-black/10">
                <input
                  type="search"
                  placeholder="Type to start searching..."
                  className="min-w-0 w-full bg-transparent px-[14px] py-[14px] text-[14px] outline-none"
                />
                <span className="flex w-[50px] shrink-0 items-center justify-center bg-accent text-white">
                  <WordPressSearchIcon />
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-5 block border-b-2 border-accent pb-[5px] text-[22px]!">Popular Posts</h4>
              <div className="space-y-5">
                {popularPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group flex min-w-0 gap-5 overflow-hidden rounded-[20px] border border-black/[0.13] p-[10px] shadow-[0_0_4px_rgba(0,0,0,0.1)]"
                  >
                    <div className="relative aspect-[1.22] w-2/5 shrink-0 overflow-hidden rounded-[10px] bg-light">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <span className="block text-[18px] font-bold leading-[1.2] group-hover:text-accent">{p.title}</span>
                      <span className="text-[13px] text-[#adadad]">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 block border-b-2 border-accent pb-[5px] text-[22px]!">Categories</h4>
              <ul className="space-y-[5px] text-[17px]">
                {CATEGORIES.map((category) => (
                  <li key={category.slug}>
                    <Link href={`/category/${category.slug}`} className="text-ink/70 hover:text-accent">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] border border-accent bg-light p-5 text-center">
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-white">
                <EyebrowIcon className="h-9 w-9" />
              </span>
              <h3 className="mb-5 text-[32px]! leading-[1.2]">Want Your Garage Door Fix? We&apos;re Ready To Help You!</h3>
              <div className="flex flex-col gap-3">
                <DialNowButton className="w-full" />
                <a
                  href="/freequote"
                  className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-accent bg-transparent px-[90px] py-[19px] text-center text-lg font-semibold capitalize leading-none text-accent transition-[background-color,border-color,color] duration-[250ms] ease hover:bg-accent hover:text-white"
                >
                  Get Started
                </a>
              </div>
              <a href="mailto:info@anchorgaragedoor.com" className="mt-5 inline-block text-[17px] text-ink/60 hover:text-accent">
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
