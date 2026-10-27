import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <p>AI & Data Science • GenAI • Full-Stack Development</p>

          <h1>Abhishek Satyarum</h1>

          <p>
            Building ideas into practical software and AI solutions.
          </p>

          <div>
            <Link href="/projects">View Projects</Link>
            <a href="/resume/Abhishek-CV-Resume.pdf">
              Download Resume
            </a>
          </div>
        </section>

        <section>
          <h2>About</h2>

          <p>
            I&apos;m a B.E. Artificial Intelligence & Data Science student
            interested in building practical software, AI and Generative AI
            solutions. I enjoy turning ideas into working products while
            continuously improving my engineering fundamentals.
          </p>
        </section>

        <section>
          <h2>Current Focus</h2>

          <ul>
            <li>Building AI-powered and full-stack applications</li>
            <li>Exploring Generative AI and backend engineering</li>
            <li>Strengthening software engineering and DSA fundamentals</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}