import { timeline } from "@/data/timeline";

export const metadata = {
  title: "timeline — jada.",
};

export default function TimelinePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-dark mb-4 leading-none">
            timeline<span className="text-mauve">.</span>
          </h1>
          <p className="text-xl text-dark/55">chapters of my story so far</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track */}
          <div className="absolute left-7 top-2 bottom-2 w-px bg-cream-dark" />

          <ol className="space-y-10">
            {timeline.map((item, i) => (
              <li key={i} className="relative flex gap-8">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-14 flex justify-center pt-1.5">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-cream ${item.color}`}
                  />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-dark/35 uppercase tracking-widest">
                      {item.year}
                    </span>
                    <span className="text-base">{item.emoji}</span>
                  </div>
                  <h2 className="text-xl font-bold text-dark mb-1">
                    {item.title}
                  </h2>
                  <p className="text-dark/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
