import { Arrow } from "../widgets/arrow";
import Tech from "./tech";

export default function Experience({ company, role, description, techStack, timePeriod }) {
    return (
      <div className="relative group grid sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12 px-4 py-4 transition-all duration-300 group-hover/exp:opacity-40 hover:!opacity-100 hover:[&_h3]:text-[#5CEAD4] hover:[&_p]:text-white w-full md:w-full lg:w-auto">
      {/* <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"> */}
        <div className="absolute w-full h-full rounded-md border border-white/10 shadow-[0_4px_10px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] bg-[white]/2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 z-10"></div>
        {/* <div className="flex sm:order-1 sm:col-span-2 flex-col sm:flex-row w-full text-nowrap z-10 mb-2 mt-1 font-semibold uppercase tracking-wide text-slate-500"> */}
          {/* Timeline Column */}
            <header className="text-xs sm:order-1 sm:col-span-2 z-10 mb-2 mt-1 font-semibold uppercase tracking-wide text-slate-500">
              {/* <h6 className="text-xs "> */}
                {timePeriod}
              {/* </h6> */}
            </header>
        {/* </div> */}
          {/* Experience Details */}
        <div className="sm:order-2 sm:col-span-6">
          <h3 className="font-medium leading-snug text-[#E2E8F0] transition-colors duration-300">
            <div>
              <a href="#">
                <span>{role} · {" "}
                  <span>
                    {company}
                    <Arrow className="inline-block pl-2 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter-none transition-transform duration-300" />
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="text-gray-400 text-sm leading-normal">{description}</p>
            {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 mt-2">
              {techStack.map((tech) => (
                <Tech key={tech} techName={tech} />
            ))}
          </div>
        </div>
      </div>
    );
  }
// •