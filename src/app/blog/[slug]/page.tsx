import { posts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — jada.` : "not found" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-block text-dark/45 hover:text-pink transition-colors text-sm mb-10"
        >
          ← back to blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6 text-sm text-dark/45">
          <time>{post.date}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime} min read</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-dark mb-10 leading-tight">
          {post.title}
        </h1>

        {/* Content */}
        <div className="space-y-5 text-dark/75 leading-relaxed text-lg">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
