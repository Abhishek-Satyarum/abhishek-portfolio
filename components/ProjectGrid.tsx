import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/content/projects";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}