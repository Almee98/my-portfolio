import { Arrow } from "../widgets/arrow";
import Tech from "./tech";
import Image from "next/image";

export default function Project({ name, imageName, description, techStack }) {
    return (
      <div className="relative group transition-all duration-300 group-hover/prj:opacity-40 hover:!opacity-100 hover:[&_h3]:text-[#5CEAD4] hover:[&_p]:text-white">
        <div className="absolute w-full h-full rounded-md border border-white/10 shadow-[0_4px_10px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] bg-[white]/2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 z-10"></div>
        <div className="px-4 py-4 flex">
          {/* Project Image */}
          <div className="text-left mt-1 pr-12">
            <Image
              src={imageName}
              alt={name}
              width={150}
              height={30}
              className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:translate-y-1"
            />
          </div>
          {/* Experience Details */}
          <div className="mb-4">
            <h3 className="text-md text-[#E2E8F0] font-semibold transition-colors duration-300">
              <div>
                <a href="#">
                  <span>{name}
                    <span>
                      <Arrow className="inline-block pl-2 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter-none transition-transform duration-300" />
                    </span>
                  </span>
                </a>
              </div>
            </h3>
            <p className="text-gray-400 text-sm">{description}</p>
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
  