export type Project = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
};

// TODO: Replace with your actual projects. GitHub links use YOUR_USERNAME — update it.
export const projects: Project[] = [
  {
    name: "byjada",
    description:
      "My personal website — the one you're looking at right now. Built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/YOUR_USERNAME/byjada",
    live: "https://byjada.vercel.app",
    featured: true,
  },
  {
    name: "project two",
    description:
      "A short description of what this project does and why you built it.",
    tags: ["React", "Node.js"],
    github: "https://github.com/YOUR_USERNAME/project-two",
    featured: true,
  },
  {
    name: "side thing",
    description: "Something fun you tinkered with on a weekend.",
    tags: ["Python"],
    github: "https://github.com/YOUR_USERNAME/side-thing",
    featured: false,
  },
];
