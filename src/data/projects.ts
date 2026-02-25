export type Project = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "listd",
    description:
      "AI image recognition app that scans clothing tags and auto-generates Vinted listings — title, description, and price. Point, scan, sell.",
    tags: ["TypeScript", "AI Vision", "Next.js"],
    github: "https://github.com/jadaross/listd",
    live: "https://listd-jadas-projects-b3cbda3d.vercel.app",
    featured: true,
  },
  {
    name: "te ataarangi",
    description:
      "A website to help learn te reo Māori using the Te Ataarangi immersive method. A personal project close to my heart.",
    tags: ["TypeScript", "Next.js", "Education"],
    github: "https://github.com/jadaross/te-ataarangi",
    featured: true,
  },
  {
    name: "NHS AI Patient Experience",
    description:
      "First generative AI implementation for NHS patient experience analysis. End-to-end LLM pipeline automating classification of 50,000+ annual patient records, saving 1,500+ manual processing hours across NHS Trusts.",
    tags: ["LLMs", "OpenAI", "ETL", "Python", "Healthcare AI"],
    featured: false,
  },
  {
    name: "TTCP CAGE — 2nd place",
    description:
      "International cyber defence competition. Built autonomous cyber defensive agents using deep reinforcement learning (OpenAI Gym). Placed 2nd internationally.",
    tags: ["Deep RL", "OpenAI Gym", "Python", "Cyber Security"],
    featured: false,
  },
  {
    name: "Snyk LLM Knowledge Platform",
    description:
      "Production LangGraph agent workflows and semantic search infrastructure — Slack ingestion pipelines, a Master Ingester, and a Master Retriever REST API for enterprise-wide knowledge retrieval.",
    tags: ["LangGraph", "LLMs", "REST API", "Python"],
    featured: false,
  },
  {
    name: "COVID-19 Reinfection Forecasting",
    description:
      "National forecasting model using Bayesian statistical methods, integrating health datasets across Australian jurisdictions to support Primary Care decisions for 100+ government stakeholders.",
    tags: ["Bayesian Stats", "XGBoost", "Python", "Public Health"],
    featured: false,
  },
  {
    name: "byjada",
    description:
      "This site. Next.js 16, TypeScript, Tailwind CSS v4. Cursor sparkle, typewriter animations, and autumn vibes included.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jadaross/byjada",
    live: "https://byjada.vercel.app",
    featured: false,
  },
];
