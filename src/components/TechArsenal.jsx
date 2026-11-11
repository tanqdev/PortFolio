import React from "react";

const TechArsenal = () => {
  const categories = [
    {
      id: "01",
      name: "LANGUAGES",
      dotColor: "bg-purple-500",
      skills: [
        { name: "C++", descriptor: "Algorithms / STL" },
        { name: "Python", descriptor: "Data & APIs" },
        { name: "TypeScript", descriptor: "Strict Type Systems" },
        { name: "JavaScript (ES6+)", descriptor: "Node & Async" },
        { name: "SQL", descriptor: "Queries & Indices" },
      ],
    },
    {
      id: "02",
      name: "FRONTEND",
      dotColor: "bg-cyan-400",
      skills: [
        { name: "React.js", descriptor: "Component Systems" },
        { name: "Tailwind CSS", descriptor: "Utility Architecture" },
        { name: "HTML5", descriptor: "Semantic Structure" },
        { name: "CSS3", descriptor: "Responsive Layouts" },
      ],
    },
    {
      id: "03",
      name: "BACKEND",
      dotColor: "bg-emerald-400",
      skills: [
        { name: "Node.js", descriptor: "Runtime Services" },
        { name: "Express.js", descriptor: "Middleware & Routes" },
        { name: "FastAPI", descriptor: "Asynchronous Python" },
        { name: "REST Architectures", descriptor: "Idempotency" },
        { name: "JWT & Auth", descriptor: "Stateless Tokens" },
      ],
    },
    {
      id: "04",
      name: "INFRA & ML",
      dotColor: "bg-fuchsia-400",
      skills: [
        { name: "PostgreSQL", descriptor: "Relational Engine" },
        { name: "PyTorch", descriptor: "Tensors & Autograd" },
        { name: "Scikit-learn", descriptor: "Statistical Models" },
        { name: "Docker", descriptor: "Containerization" },
        { name: "Git / GitHub", descriptor: "CI/CD & Workflows" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-800">
      {/* Category / Subtitle */}
      <div className="text-indigo-400 font-mono tracking-widest text-xs uppercase mb-2 flex items-center gap-2">
        <span>03</span>
        <span className="text-zinc-600">/</span>
        <span>SYSTEMS TAXONOMY</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-10 sm:mb-16">
        Tech Arsenal &amp; Capabilities.
      </h2>

      {/* 4 Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 backdrop-blur-md hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 text-xs font-mono tracking-wider mb-2">
              <span className="text-zinc-200 font-bold">
                {cat.id} // {cat.name}
              </span>
              <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`}></span>
            </div>

            {/* Rows with High-Contrast Text */}
            <div className="divide-y divide-zinc-800/60">
              {cat.skills.map((skill, index) => (
                <div
                  key={index}
                  className="py-3.5 flex items-baseline justify-between gap-3 group hover:bg-white/[0.04] px-1 rounded transition-colors"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-zinc-300 text-right shrink-0">
                    {skill.descriptor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechArsenal;
