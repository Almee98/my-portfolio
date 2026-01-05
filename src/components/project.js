import { Arrow } from "../widgets/arrow";
import Tech from "./tech";
import Image from "next/image";
// we're here in project.js

export default function Project({ name, imageName, description, link, techStack }) {
    return (
      <div className="relative group grid sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12 px-4 py-4 transition-all duration-300 group-hover/prj:opacity-40 hover:!opacity-100 hover:[&_h3]:text-[#5CEAD4] hover:[&_p]:text-white w-full">
      {/* <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"> */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${name} (opens in a new tab)`}
            className="absolute w-full h-full rounded-md border border-white/10 shadow-[0_4px_10px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] bg-[white]/2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5CEAD4]"
          />
        ) : (
          <div aria-hidden="true" className="absolute w-full h-full rounded-md border border-white/10 shadow-[0_4px_10px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] bg-[white]/2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 z-10 pointer-events-auto cursor-default select-none"></div>
        )}  
        {/* <div className="px-4 py-4 flex-col sm:flex-row flex gap-8">  */}
           {/* Project Image */}
          <div className="order-2 sm:order-1 sm:col-span-2 w-full mb-4 sm:mb-0">
            <Image
              src={imageName}
              alt={name}
              width={200}
              height={48}
              sizes="100vw"
              className="object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
            />
            {/* (max-width: 640px) 80px, w-28 sm:w-28 md:w-34 lg:w-40 w-36 | sm:w-24 md:w-28 lg:w-32 xl:w-36  */}
          </div>
          {/* Experience Details */}
          <div className="order-1 sm:order-2 sm:col-span-6 mb-4">
            <h3 className="text-md text-[#E2E8F0] font-semibold transition-colors duration-300">
              <div>
                <span className={link ? "cursor-pointer inline-flex items-center" : "inline-flex items-center"}>
                  {name}
                  <span>
                    <Arrow className={link ? "inline-block pl-2 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter-none transition-transform duration-300" : "inline-block pl-2 transition-transform duration-300"} />
                  </span>
                </span>
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
    );
  }