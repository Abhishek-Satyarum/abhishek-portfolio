import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/content/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <>
      <Navbar />

      <main>
        {/* Intro */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-neutral-500">
              Selected Work
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight">
              Projects
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              A collection of projects where I explore AI, Generative AI,
              software development, developer tooling and practical
              problem-solving.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-10">
              <p className="text-sm font-medium text-neutral-500">
                Featured
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Selected projects
              </h2>
            </div>

            <ProjectGrid projects={featuredProjects} />
          </div>
        </section>

        {/* More Work */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10">
            <p className="text-sm font-medium text-neutral-500">
              More Work
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Other projects
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-600">
              More experiments, collaborations and web development work
              can be explored through my GitHub.
            </p>
          </div>

          <ProjectGrid projects={otherProjects} />

          <div className="mt-10">
            <a
              href="https://github.com/Abhishek-Satyarum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
            >
              Explore more on GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}