export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: number;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, World.",
    date: "February 2025",
    readTime: 2,
    excerpt:
      "The obligatory first post — a bit about me, why I built this site, and what I plan to write about.",
    content: `Welcome to my corner of the internet.

I built this site because I wanted a place that felt like mine. Not a LinkedIn profile, not a resume — something that actually shows who I am and what I care about.

Here I'll write about things I'm learning, projects I'm working on, and whatever else is on my mind. No strict schedule, no niche, just me.

Thanks for stopping by. More soon.

— Jada`,
  },
];
