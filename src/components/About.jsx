import React from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-800">
      {/* Category / Subtitle */}
      <div className="text-indigo-400 font-mono tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
        <span>01</span>
        <span className="text-zinc-600">/</span>
        <span>BIOGRAPHY &amp; INTENT</span>
      </div>

      {/* Main Punchy Headline */}
      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-5xl mb-10 sm:mb-16">
        Bridging scalable backend architecture with intuitive, precision-crafted interfaces.
      </h2>

      {/* Two Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative with Clear High-Contrast Text */}
        <div className="lg:col-span-7 space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            I'm <strong className="text-white font-bold">Tanishq Srivastava</strong>, a Computer Science undergraduate focused on systems engineering, performant full-stack platforms, and machine learning pipelines. My work is anchored around one clear conviction: software should be fast, deterministically structured, and built to survive complexity.
          </p>

          <p>
            Rather than gluing together shallow boilerplates, I immerse myself in relational query plans, cache invalidate mechanics, modular REST &amp; GraphQL contracts, and statistical inference. From architecting e-commerce inventory locking engines to training gradient boosted classifiers, my goal is pragmatic engineering excellence.
          </p>

          <p className="text-zinc-200 pt-2 font-medium">
            Currently based in India, open to engineering internships, full-stack roles, and open-source collaborations globally.
          </p>
        </div>

        {/* Right Column: Specifications & Philosophy */}
        <div className="lg:col-span-5 divide-y divide-zinc-800 border-t border-b border-zinc-800">
          {/* Spec 01 */}
          <div className="py-4">
            <span className="text-indigo-400 font-mono text-xs tracking-wider uppercase block">
              01 / ACADSPECS
            </span>
            <h4 className="text-white font-bold text-sm sm:text-base mt-1">
              B.Tech in Computer Science &amp; Engineering
            </h4>
            <p className="text-zinc-400 font-mono text-xs mt-0.5">
              ABES Engineering College • Class of 2028
            </p>
          </div>

          {/* Spec 02 */}
          <div className="py-4">
            <span className="text-indigo-400 font-mono text-xs tracking-wider uppercase block">
              02 / STATUS
            </span>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-white text-xs sm:text-sm font-semibold">
                Open to Software engineering Internships &amp; Collaborations
              </span>
            </div>
          </div>

          {/* Spec 03 */}
          <div className="py-4">
            <span className="text-indigo-400 font-mono text-xs tracking-wider uppercase block">
              03 / ENGINEERING PHILOSOPHY
            </span>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-1.5 font-normal">
              Ship over speculate. Deterministic state machines, defensive typing, and readable code over fragile abstraction layers.
            </p>
          </div>

          {/* Spec 04: Metrics */}
          <div className="py-5 grid grid-cols-2 gap-4">
            <div>
              <span className="text-indigo-400 font-mono text-xs tracking-wider uppercase block">
                04 / METRICS
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">15+</span>
                <span className="text-zinc-400 font-mono text-xs font-medium">Shipped builds</span>
              </div>
            </div>

            <div>
              <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase block">
                VERSION CONTROL
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">500+</span>
                <span className="text-zinc-400 font-mono text-xs font-medium">Git Commits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
