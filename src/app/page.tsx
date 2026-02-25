import Link from "next/link";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
        {/* Decorative floating leaf shapes */}
        <div className="leaf-1 absolute top-24 left-8 md:left-16 w-20 h-32 bg-orange/20 rounded-[60%_40%_70%_30%/40%_60%_30%_70%] pointer-events-none" />
        <div className="leaf-2 absolute top-36 right-10 md:right-24 w-14 h-22 bg-pink/25 rounded-[40%_60%_30%_70%/60%_40%_70%_30%] pointer-events-none" />
        <div className="leaf-3 absolute bottom-32 left-16 md:left-32 w-16 h-28 bg-amber/20 rounded-[50%_50%_60%_40%/40%_60%_40%_60%] pointer-events-none" />
        <div className="leaf-4 absolute bottom-44 right-8 md:right-20 w-12 h-20 bg-rust/20 rounded-[60%_40%_50%_50%/30%_70%_40%_60%] pointer-events-none" />
        <div className="leaf-5 absolute top-1/2 right-4 w-8 h-14 bg-mauve/15 rounded-[45%_55%_60%_40%/50%_50%_60%_40%] pointer-events-none hidden md:block" />

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl text-center">
          <p className="text-dark/50 text-base md:text-lg mb-4 tracking-wide">
            hi there, welcome to my little corner 👋
          </p>
          <h1 className="text-7xl md:text-[10rem] font-bold text-dark mb-6 leading-none tracking-tight">
            jada<span className="text-pink">.</span>
          </h1>
          <p className="text-xl md:text-3xl text-dark/75 mb-10 min-h-[2em]">
            i&apos;m a <Typewriter />
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="#sections"
              className="px-8 py-3 bg-dark text-cream rounded-full font-medium hover:bg-dark/85 transition-all hover:scale-105 active:scale-95"
            >
              explore ↓
            </Link>
            <a
              href="https://github.com/jadaross"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-dark text-dark rounded-full font-medium hover:bg-dark hover:text-cream transition-all hover:scale-105 active:scale-95"
            >
              github ↗
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark/30 text-xs">
          <span>scroll</span>
          <div className="w-px h-8 bg-dark/20" />
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="px-6 pb-4 max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-dark/65 leading-relaxed">
          Senior AI Systems Engineer at{" "}
          <span className="text-dark font-medium">Snyk</span>, based in London.
          I build LLM pipelines, autonomous agents, and AI-powered analytics systems —
          and before that spent 3 years at{" "}
          <span className="text-dark font-medium">Quantium</span> doing data science
          across retail, health, and government (including the first generative AI
          deployment for NHS patient experience analysis).
        </p>
      </section>

      {/* ── Section cards ── */}
      <section id="sections" className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Projects */}
          <Link
            href="/projects"
            className="group relative overflow-hidden rounded-3xl p-8 bg-orange text-cream hover:scale-[1.02] transition-all duration-300 min-h-[280px] flex flex-col justify-between shadow-lg hover:shadow-xl"
          >
            <div>
              <span className="text-5xl mb-6 block">⚙️</span>
              <h2 className="text-3xl font-bold mb-2">projects</h2>
              <p className="text-cream/75 leading-relaxed">
                things i&apos;ve built and tinkered with
              </p>
            </div>
            <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>

          {/* Timeline */}
          <Link
            href="/timeline"
            className="group relative overflow-hidden rounded-3xl p-8 bg-mauve text-cream hover:scale-[1.02] transition-all duration-300 min-h-[280px] flex flex-col justify-between shadow-lg hover:shadow-xl"
          >
            <div>
              <span className="text-5xl mb-6 block">🗺️</span>
              <h2 className="text-3xl font-bold mb-2">timeline</h2>
              <p className="text-cream/75 leading-relaxed">
                chapters of my story so far
              </p>
            </div>
            <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className="group relative overflow-hidden rounded-3xl p-8 bg-pink text-cream hover:scale-[1.02] transition-all duration-300 min-h-[280px] flex flex-col justify-between shadow-lg hover:shadow-xl"
          >
            <div>
              <span className="text-5xl mb-6 block">✍️</span>
              <h2 className="text-3xl font-bold mb-2">blog</h2>
              <p className="text-cream/75 leading-relaxed">
                thoughts, learnings, random musings
              </p>
            </div>
            <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
