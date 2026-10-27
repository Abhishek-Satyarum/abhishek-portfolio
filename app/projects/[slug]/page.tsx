import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="mx-auto max-w-4xl px-6 py-24">
          <Link
            href="/projects"
            className="text-sm text-neutral-500"
          >
            ← Back to projects
          </Link>

          <p className="mt-12 text-sm text-neutral-500">
            {project.category}
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              View GitHub ↗
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <h2 className="text-2xl font-semibold">
              What I built
            </h2>

            <ul className="mt-6 space-y-4">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-neutral-600"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-semibold">
            Technology
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="border border-neutral-200 px-4 py-2 text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}