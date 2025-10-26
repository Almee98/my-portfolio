"use client";
import { useRef } from "react";
import Experience from "../components/experience";
import Project from "../components/project";
import About from "../components/about";
import experiences from "../data/experiences";
import projects from "../data/projects";
// import Experience1 from "@/components/experience1";
// import Project1 from "@/components/project1";
// import About1 from "@/components/about1";

export default function Home() {
  
  const contentRef = useRef(null);

  return (
    <div className="min-h-screen text-white">

      {/* Right scrollable content */}
        {/* Sections */}
          <section id="about" className="mb-24 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <About />
          </section>

        {/* <section id="about1" className="scroll-mt-6 bg-blue-500 py-24 mt-24">
          <About1 />
        </section> */}

        <section id="experience" className="scroll-mt-6 py-24 mt-24">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="group/exp">
            {experiences.slice(0, 6).map((exp, i) => (
              <Experience key={i} {...exp} />
            ))}
          </div>
        </section>

        {/* <section id="experience1" className="scroll-mt-6 py-24">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div>
            {experiences.slice(0, 6).map((exp, i) => (
              <Experience1 key={i} {...exp} />
            ))}
          </div>
        </section> */}

        <section id="projects" className="scroll-mt-6 py-24">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div>
            {projects.slice(0, 8).map((p, i) => (
              <Project key={i} {...p} />
            ))}
          </div>
        </section>
        {/* <section id="projects1" className="scroll-mt-6 py-24">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div>
            {projects.slice(0, 8).map((p, i) => (
              <Project1 key={i} {...p} />
            ))}
          </div>
        </section> */}
    </div>
  );
}
