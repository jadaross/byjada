import Link from "next/link";
import { posts } from "@/data/blog";

export const metadata = {
  title: "blog — jada.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-dark mb-4 leading-none">
            blog<span className="text-pink">.</span>
          </h1>
          <p className="text-xl text-dark/55">
            thoughts, learnings, random musings
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="p-8 rounded-2xl bg-cream-dark/40 hover:bg-cream-dark/80 border border-dark/8 hover:border-dark/15 transition-all">
                <div className="flex items-center gap-3 mb-3 text-sm text-dark/45">
                  <time>{post.date}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h2 className="text-2xl font-bold text-dark mb-2 group-hover:text-pink transition-colors">
                  {post.title}
                </h2>
                <p className="text-dark/60 leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-pink font-medium text-sm group-hover:translate-x-1 transition-transform">
                  read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
