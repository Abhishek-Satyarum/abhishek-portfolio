import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-20">
      <div className="max-w-4xl">
        <p className="mb-6 text-sm font-medium tracking-wide text-neutral-500">
          AI & Data Science · GenAI · Full-Stack Development
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-6xl md:text-7xl">
          Building ideas into practical software and AI solutions.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          I&apos;m Abhishek Satyarum, a B.E. Artificial Intelligence &
          Data Science student focused on building useful products with
          software, Generative AI and modern web technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </Link>

          <a
            href="/resume/Abhishek-CV-Resume.pdf"
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-500"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-sm text-neutral-500">
          <a
            href="https://github.com/Abhishek-Satyarum"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-950"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhisheksatyarum05/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-950"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/Abhishek-Satyarum/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-950"
          >
            LeetCode
          </a>

          <a
            href="mailto:satyarumabhishek@gmail.com"
            className="transition-colors hover:text-neutral-950"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}