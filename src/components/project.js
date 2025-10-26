export default function Project({ name, description, techStack }) {
    return (
      <div className="mb-6 py-24">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <p className="text-teal-400 text-sm mt-1">{techStack.join(", ")}</p>
      </div>
    );
  }
  