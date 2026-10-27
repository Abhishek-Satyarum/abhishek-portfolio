import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MomentCard from "@/components/MomentCard";
import { moments } from "@/content/moments";

export default function Moments() {
  return (
    <>
      <Navbar />

      <main>
        {/* Introduction */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-neutral-500">
              Beyond the Code
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight">
              Moments
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Not everything worth remembering happens inside a code
              editor. This is a collection of hackathons, communities,
              events, adventures and experiences that have been part of
              the journey.
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="mb-16">
              <p className="text-sm font-medium text-neutral-500">
                The Road So Far
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Experiences along the way
              </h2>
            </div>

            <div className="space-y-24">
              {moments.map((moment, index) => (
                <MomentCard
                  key={moment.id}
                  moment={moment}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500">
              More to come
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The journey is still being written.
            </h2>

            <p className="mt-5 leading-7 text-neutral-600">
              More projects, events, people and places will find their way
              here as the journey continues.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}