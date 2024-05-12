import dynamic from "next/dynamic";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="flex items-center flex-col min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
