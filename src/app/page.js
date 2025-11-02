import Experience from "../components/experience";
import Project from "../components/project";
import About from "../components/about";
import experiences from "../data/experiences";
import projects from "../data/projects";

export default function Home() {

  return (
    <div className="min-h-screen text-white">

      {/* Right scrollable content */}
      {/* Sections */}
        <section id="about" className="mb-24 scroll-mt-16 md:mb-4 lg:mb-36 lg:scroll-mt-24">
          <About />
        </section>

      <section id="experience" className="scroll-mt-6 py-4 mt-20">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="group/exp">
          {experiences.slice(0, 6).map((exp, i) => (
            <Experience key={i} {...exp} />
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-6 py-4 mt-20">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="group/prj">
          {projects.slice(0, 8).map((p, i) => (
            <Project key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}
