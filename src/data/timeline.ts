export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  emoji: string;
  color: string; // Tailwind bg-* class for the timeline dot
};

export const timeline: TimelineItem[] = [
  {
    year: "2025 — present",
    emoji: "🐍",
    title: "Senior AI Systems Engineer, Snyk",
    description:
      "Building production LLM systems and agentic workflows (LangGraph) to operationalise enterprise knowledge. Architected scalable ingestion and retrieval infrastructure — Slack pipelines, a Master Ingester, and a REST API for semantic search across internal data sources. Represent Snyk at international engineering conferences.",
    color: "bg-orange",
  },
  {
    year: "2023 — 2025",
    emoji: "🏥",
    title: "Data Scientist (Health & Government), Quantium",
    description:
      "Led the first generative AI deployment for NHS patient experience analysis — end-to-end LLM pipeline integrating unstructured NHS data with OpenAI models. Automated classification of 50,000+ patient records annually, saving 1,500+ manual processing hours. Became the highest-used BI tool across Buckinghamshire NHS Trust.",
    color: "bg-pink",
  },
  {
    year: "2022 — 2023",
    emoji: "🤖",
    title: "Associate Data Scientist, Quantium",
    description:
      "Placed 2nd internationally in the TTCP CAGE Challenge — developing autonomous cyber defensive agents using deep reinforcement learning and OpenAI Gym. Built COVID-19 dashboards for 100+ government stakeholders and a national reinfection forecasting model using Bayesian methods.",
    color: "bg-amber",
  },
  {
    year: "2018 — 2021",
    emoji: "🎓",
    title: "Australian National University",
    description:
      "Double Bachelor of Statistics and Science — majors in Data Analytics and Advanced Chemistry. Where the love of numbers, models, and making sense of messy data began.",
    color: "bg-mauve",
  },
];
