# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`byjada` is Jada's personal website — a Next.js 16 app deployed on Vercel. It includes a career/about section, project showcase with GitHub links, a life timeline, and a blog. The aesthetic is playful/colorful with a dusty-rose pink + autumn (burnt orange, amber, rust) palette on a warm cream background.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build (static export via SSG)
npm run lint      # ESLint
npm run start     # Start production server locally
```

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — config is CSS-only, no `tailwind.config.ts`. See `src/app/globals.css`.
- **Vercel** for deployment (auto-deploys from `main`)

## Architecture

### Routing (App Router)

All routes live under `src/app/`. Each page is a `page.tsx` file:

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero + section nav cards |
| `/projects` | `src/app/projects/page.tsx` | Project grid |
| `/timeline` | `src/app/timeline/page.tsx` | Visual life timeline |
| `/blog` | `src/app/blog/page.tsx` | Blog post list |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Individual post (SSG via `generateStaticParams`) |

`src/app/layout.tsx` wraps every page with `<Nav>`, `<Footer>`, and `<CursorSparkle>`.

### Components (`src/components/`)

| Component | Notes |
|---|---|
| `Nav` | Client component — scroll-aware, sticky, mobile hamburger |
| `Typewriter` | Client component — cycling animated text in hero |
| `CursorSparkle` | Client component — colored sparkle dots that follow the cursor (desktop only) |
| `ProjectCard` | Server component — used in the projects grid |
| `Footer` | Server component |

### Content / Data

All site content is plain TypeScript data — no CMS or MDX yet.

| File | Contains |
|---|---|
| `src/data/projects.ts` | `Project[]` array + type |
| `src/data/timeline.ts` | `TimelineItem[]` array + type |
| `src/data/blog.ts` | `Post[]` array + type (content is a raw string split into paragraphs at render time) |

To add a blog post: add a new object to `posts` in `src/data/blog.ts`. Paragraphs are separated by `\n\n`.

### Styling

Tailwind v4 uses `@theme` in `src/app/globals.css` instead of `tailwind.config.ts`. Custom tokens:

```
--color-cream / --color-cream-dark  (background shades)
--color-pink / --color-pink-light / --color-mauve  (rose tones)
--color-orange / --color-amber / --color-rust       (autumn accents)
--color-dark                                         (near-black text)
```

Font CSS variables set by `next/font` in `layout.tsx`:
- `--font-syne` → display headings (`h1`–`h6` via globals.css)
- `--font-dm-sans` → body text

### Things to Customize

Search for `YOUR_USERNAME` across the codebase — that's the GitHub username placeholder in `Footer.tsx`, `page.tsx`, and `src/data/projects.ts`.
