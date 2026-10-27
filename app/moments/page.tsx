import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Moments() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <p>Beyond the Code</p>

          <h1>Moments</h1>

          <p>
            Hackathons, events, communities, adventures and moments that have
            been part of the journey.
          </p>
        </section>

        <section>
          <h2>The Road So Far</h2>

          <p>
            A visual collection of experiences, milestones and memories.
          </p>

          <div>
            <p>HackCelestial 3.0</p>
            <p>Beyond Bytes</p>
            <p>Technical Events</p>
            <p>Adventures & Treks</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}