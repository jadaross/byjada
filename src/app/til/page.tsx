import { getTilEntries } from "@/lib/notion";
import NotionBlocks from "@/components/NotionBlocks";

export const metadata = {
  title: "TIL — jada.",
  description: "Short things I've learned, noticed, or found interesting.",
};

// Revalidate every hour — new Notion entries appear automatically, no redeploy needed
export const revalidate = 3600;

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const TAG_COLORS: Record<string, string> = {
  AI: "bg-orange/15 text-orange",
  LLMs: "bg-orange/15 text-orange",
  Python: "bg-amber/20 text-rust",
  Statistics: "bg-amber/15 text-amber",
  "Data Science": "bg-amber/15 text-amber",
  TypeScript: "bg-pink/15 text-mauve",
  React: "bg-pink/15 text-pink",
  "te reo": "bg-mauve/15 text-mauve",
};

function tagClass(tag: string) {
  return TAG_COLORS[tag] ?? "bg-dark/8 text-dark/60";
}

export default async function TilPage() {
  const entries = await getTilEntries();

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-dark mb-4 leading-none">
            TIL<span className="text-amber">.</span>
          </h1>
          <p className="text-xl text-dark/55">
            short things I&apos;ve learned, noticed, or found interesting
          </p>
        </div>

        {/* Feed */}
        {entries.length === 0 ? (
          <div className="text-center py-20 text-dark/35">
            <p className="text-lg">nothing here yet — check back soon.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {entries.map((entry) => (
              <article
                key={entry.id}
                className="border-l-2 border-cream-dark pl-6 pb-2"
              >
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {entry.date && (
                    <time className="text-xs font-bold text-dark/35 uppercase tracking-widest">
                      {formatDate(entry.date)}
                    </time>
                  )}
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${tagClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-dark mb-4">
                  {entry.title}
                </h2>

                {/* Content */}
                <NotionBlocks blocks={entry.blocks} />
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
