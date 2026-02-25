export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  emoji: string;
  color: string; // Tailwind bg-* class for the timeline dot
};

// TODO: Fill in with your real story! Add as many items as you want.
export const timeline: TimelineItem[] = [
  {
    year: "2025",
    emoji: "🚀",
    title: "Something exciting",
    description: "A milestone, a launch, a moment worth marking. What happened here?",
    color: "bg-pink",
  },
  {
    year: "2024",
    emoji: "💡",
    title: "A big realization",
    description:
      "Maybe you pivoted, learned something that changed your path, or started something new.",
    color: "bg-orange",
  },
  {
    year: "2023",
    emoji: "🎓",
    title: "Graduated / started a new role",
    description:
      "The beginning of a new chapter. What door opened here?",
    color: "bg-amber",
  },
  {
    year: "2022",
    emoji: "🌱",
    title: "First steps",
    description:
      "Everyone starts somewhere. What does the beginning of your story look like?",
    color: "bg-rust",
  },
];
