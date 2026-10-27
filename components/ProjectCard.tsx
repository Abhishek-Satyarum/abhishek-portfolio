import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-neutral-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-500">
            {project.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <span className="text-xs text-neutral-500">
          {project.status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-neutral-600">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span
            key={technology}
            className="text-xs text-neutral-500"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="font-medium text-neutral-950"
        >
          View project →
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}