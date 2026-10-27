import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500">
              About
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Turning ideas into things people can actually use.
            </h2>

            <p className="mt-6 leading-7 text-neutral-600">
              I enjoy working at the intersection of software development,
              artificial intelligence and product thinking. From AI-powered
              applications to developer tools, I like exploring ideas,
              building them into working systems and learning from the
              process.
            </p>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm font-medium text-neutral-500">
              Current Focus
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold">
                  AI & Generative AI
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Building practical applications using modern AI and
                  Generative AI technologies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Backend & Full-Stack
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Improving my ability to design reliable APIs and complete
                  full-stack applications.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Engineering Fundamentals
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Strengthening DSA, software engineering and system
                  fundamentals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}