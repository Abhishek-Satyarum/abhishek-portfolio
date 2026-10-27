import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Journey() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <p>Learning • Building • Contributing</p>

          <h1>My Journey</h1>

          <p>
            A record of the experiences, projects and opportunities that have
            shaped my growth as a developer.
          </p>
        </section>

        <section>
          <h2>Education</h2>

          <article>
            <h3>B.E. Artificial Intelligence & Data Science</h3>
            <p>Datta Meghe College of Engineering</p>
          </article>
        </section>

        <section>
          <h2>Experience & Work</h2>

          <article>
            <h3>AI Summer Internship — MirAI</h3>
          </article>

          <article>
            <h3>Google Student Ambassador — India</h3>
          </article>

          <article>
            <h3>GirlScript Summer of Code</h3>
          </article>

          <article>
            <h3>SHAIDS — Technical Team</h3>
          </article>

          <article>
            <h3>Hackathons & Technical Events</h3>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}