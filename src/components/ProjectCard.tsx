import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  small?: boolean;
};

export default function ProjectCard({ project, small = false }: Props) {
  return (
    <div
      className={`rounded-2xl bg-cream-dark/50 hover:bg-cream-dark border border-dark/10 hover:border-dark/20 transition-all hover:shadow-md ${
        small ? "p-5" : "p-7"
      }`}
    >
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3
          className={`font-bold text-dark ${small ? "text-lg" : "text-xl"}`}
        >
          {project.name}
        </h3>
        <div className="flex gap-3 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark/40 hover:text-dark transition-colors text-sm font-medium"
            >
              gh ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark/40 hover:text-pink transition-colors text-sm font-medium"
            >
              live ↗
            </a>
          )}
        </div>
      </div>

      <p className={`text-dark/65 mb-4 leading-relaxed ${small ? "text-sm" : ""}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 bg-dark/10 text-dark/60 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
