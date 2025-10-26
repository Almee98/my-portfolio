export default function Experience1({ company, role, description, techStack, timePeriod }) {
    return (
      <div className="mb-6 flex">
        {/* Timeline Column */}
        <div className="w-1/4 text-right pr-4 text-gray-400">
          <p className="text-sm">{timePeriod}</p>
        </div>
        {/* Experience Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">{role} @ {company}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
          <p className="text-teal-400 text-sm mt-1">{techStack.join(", ")}</p>
        </div>
      </div>
    );
  }
  