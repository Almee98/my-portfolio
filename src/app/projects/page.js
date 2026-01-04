import projects from "@/data/projects";
import { Arrow } from "@/widgets/arrow";
import { ArrowLeft } from "@/widgets/arrow-left";
import Link from "next/link";
import Tech from "@/components/tech";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24">
      <div className="mb-8 pl-2">
        <Link 
          href="/" 
          className="text-[#5CEAD4] inline-flex items-center group mb-4"
        >
          <ArrowLeft className="mr-2 text-[#5CEAD4] group-hover:-translate-x-2 transition-transform duration-300" />
          <span>Almee Christian</span>
        </Link>
        <h1 className="text-4xl sm:text-5xl text-gray-300 font-bold tracking-tight">All Projects</h1>
      </div>
      <div className="-mx-6 md:-mx-12">
        <div className="px-6 md:px-12">
          <table className="w-full mt-12 border-collapse text-left">
            <thead className="sticky top-0 z-10 backdrop-blur px-6 py-5">
              <tr className="border-b border-slate-200/10">
                <th className="text-left py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                <th className="text-left py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
              </tr>
            </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr 
                key={i}
                className="border-b border-slate-300/10 group last:border-none"
              >
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px"> {project.year || '2024'} </div>
                </td>
                <td className="py-4 pr-4 align-top">
                  <div>
                    {project.link ? (
                      <>
                        <div className="block sm:hidden">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer noopener"
                            aria-label={`${project.name} (opens in a new tab)`}
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          >
                            <span>
                              {project.name.split(' ').slice(0, -1).join(' ')}
                              {' '}
                              <span className="inline-block">
                                {project.name.split(' ').slice(-1)[0]}
                                <Arrow className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="hidden sm:block font-semibold leading-snug text-slate-200">
                          {project.name}
                        </div>
                      </>
                    ) : (
                      <div className="font-semibold leading-snug text-slate-200">
                        {project.name}
                      </div>
                    )}
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div className="translate-y-px whitespace-nowrap">
                    {project.madeAt || 'Personal'}
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-normal leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  {project.link ? (
                    <ul className="translate-y-1">
                      <li className="mb-1 flex items-center">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer noopener"
                          aria-label={`${project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')} (opens in a new tab)`}
                          className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        >
                          <span>
                            <span className="inline-block">
                              {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                              <Arrow className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <span className="text-slate-500 text-sm">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

