import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { blogPosts } from "@/lib/blogPosts";

const post = blogPosts.find((p) => p.slug === "commercial-vs-residential-garage-doors")!;

export const metadata: Metadata = {
  title: `${post.title} - Anchor Garage Door and Gate Services, Inc`,
  description: post.excerpt,
};

export default function Page() {
  return <BlogPostLayout post={post} />;
}
