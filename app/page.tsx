import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <main className="flex items-center flex-col min-h-screen overflow-x-hidden">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
