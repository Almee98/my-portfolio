import { Arrow } from "../assets/arrow";

function Tech({ techName }) {
  return (
    <div className="inline-block px-4 py-2 bg-[#2DD4BF]/10 text-center rounded-full mt-4">
      <div className="text-sm text-[#5CEAD4]">{techName}</div>
    </div>
  );
}

export default function Experience({ company, role, description, techStack, timePeriod }) {
    return (
      <div className="relative group transition-all duration-300 group-hover/exp:opacity-40 hover:!opacity-100 hover:[&_h3]:text-[#5CEAD4] hover:[&_p]:text-white">
        <div className="absolute w-full h-full rounded-md border border-white/10 shadow-[0_4px_10px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] bg-[white]/2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 z-10"></div>
        <div className="px-4 py-4 flex">
            {/* Timeline Column */}
          <div className="text-left mt-1 pr-12 text-gray-400">
              <h6 className="text-xs text-nowrap">{timePeriod}</h6>
          </div>
            {/* Experience Details */}
          <div className="mb-4">
            <h3 className="text-md text-white font-semibold transition-colors duration-300">
              <div>
                <a href="#">
                  <span>{role} • {" "}
                    <span>
                      {company}
                      <Arrow className="inline-block pl-2 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter-none transition-transform duration-300" />
                    </span>
                  </span>
                </a>
              </div>
            </h3>
            <p className="text-gray-400 text-sm hover:text-white">{description}</p>
              {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech) => (
                  <Tech key={tech} techName={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
