import Experience from "../components/experience";
import Project from "../components/project";
import About from "../components/about";
import experiences from "../data/experiences";
import projects from "../data/projects";
import Link from "next/link";
import { ArrowRight } from "../widgets/arrow-right";
import { Arrow } from "../widgets/arrow";

export default function Home() {

  return (
    <div className="min-h-screen text-white">

      {/* Right scrollable content */}
      {/* Sections */}
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-slate-50">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About Me</h2>
          </div>
          <About />
        </section>

      <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-slate-50">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
        <div className="group/exp">
          {experiences.slice(0, 6).map((exp, i) => (
            <Experience key={i} {...exp} />
          ))}
        </div>
        <div className="mt-8 px-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center group text-[#5CEAD4] hover:text-white transition-colors duration-300 font-medium"
          >
            <span>View Full Résumé</span>
            <Arrow className="inline-block pl-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-slate-50">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
        <div className="group/prj">
          {projects.slice(0, 5).map((p, i) => (
            <Project key={i} {...p} />
          ))}
        </div>
        <div className="mt-8 px-4">
          <Link 
            href="/projects" 
            className="inline-flex items-center group text-[#5CEAD4] hover:text-white transition-colors duration-300 font-medium"
          >
            <span>View All Projects</span>
            <ArrowRight className="inline-block pl-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}
