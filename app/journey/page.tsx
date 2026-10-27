import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JourneySection from "@/components/JourneySection";
import { journey } from "@/content/journey";

export default function Journey() {
  return (
    <>
      <Navbar />

      <main>
        {/* Introduction */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-neutral-500">
              Learning · Building · Contributing
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight">
              My Journey
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              From learning the fundamentals of technology to building
              AI-powered applications, contributing to communities and
              participating in hackathons, this is a record of the
              experiences that have shaped my growth.
            </p>
          </div>
        </section>

        {/* Journey */}
        <section className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <JourneySection items={journey} />
          </div>
        </section>

        {/* Current Direction */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-neutral-500">
              What&apos;s next
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Still learning. Still building.
            </h2>

            <p className="mt-6 leading-7 text-neutral-600">
              I&apos;m currently focused on becoming a stronger software
              engineer while continuing to explore Generative AI, backend
              development, full-stack systems and cybersecurity.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}