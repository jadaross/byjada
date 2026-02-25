import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "projects — jada.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-dark mb-4 leading-none">
            projects<span className="text-orange">.</span>
          </h1>
          <p className="text-xl text-dark/55">
            things i&apos;ve built and tinkered with
          </p>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-14">
            <p className="text-xs font-bold text-dark/35 uppercase tracking-widest mb-6">
              featured
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Other work */}
        {rest.length > 0 && (
          <div>
            <p className="text-xs font-bold text-dark/35 uppercase tracking-widest mb-6">
              other work
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((project) => (
                <ProjectCard key={project.name} project={project} small />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
