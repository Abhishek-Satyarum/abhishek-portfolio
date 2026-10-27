import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <p>Selected Work</p>
          <h1>Projects</h1>

          <p>
            A selection of projects exploring AI, Generative AI, software
            engineering and developer tooling.
          </p>
        </section>

        <section>
          <h2>Featured Projects</h2>

          <div>
            <p>LabelLens AI</p>
            <p>Git Secret Prevention</p>
            <p>Multi-Modal Visual Novel</p>
            <p>Life-OS</p>
          </div>
        </section>

        <section>
          <h2>More Work</h2>

          <p>
            More projects and experiments will be available through GitHub.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}