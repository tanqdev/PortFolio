import React, { useState } from "react";

const Work = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <section id="works" className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-800">
      {/* Category / Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-indigo-400 font-mono tracking-widest text-xs uppercase mb-2 flex items-center gap-2">
            <span>02</span>
            <span className="text-zinc-600">/</span>
            <span>FEATURED REPERTOIRE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected Works.
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs tracking-wider overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => setActiveTab("ALL")}
            className={`pb-1 cursor-pointer transition-colors relative ${
              activeTab === "ALL"
                ? "text-white font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            ALL (03)
            {activeTab === "ALL" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("FULL STACK")}
            className={`pb-1 cursor-pointer transition-colors relative ${
              activeTab === "FULL STACK"
                ? "text-white font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            FULL STACK
            {activeTab === "FULL STACK" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("SYSTEMS & ML")}
            className={`pb-1 cursor-pointer transition-colors relative ${
              activeTab === "SYSTEMS & ML"
                ? "text-white font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            SYSTEMS &amp; ML
            {activeTab === "SYSTEMS & ML" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500"></span>
            )}
          </button>
        </div>
      </div>

      {/* Projects Container */}
      <div className="space-y-8">
        {/* Project 01: ACHETER (Full Width Card) */}
        {(activeTab === "ALL" || activeTab === "FULL STACK") && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-8 lg:p-10 backdrop-blur-md hover:border-zinc-700 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Details */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="text-indigo-400 font-mono text-xs tracking-wider uppercase mb-2">
                    PROJECT // 01 • E-COMMERCE ENGINE
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    ACHETER
                  </h3>
                  <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mt-1 mb-5">
                    HIGH-THROUGHPUT STOREFRONT &amp; TRANSACTION PIPELINE
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    A high-performance modern e-commerce platform built with React, Node.js, and PostgreSQL. Features robust token authentication, stateful cart management, real-time inventory locking, and end-to-end checkout with Stripe webhooks.
                  </p>

                  {/* Spec 2x2 Grid with High-Contrast Text */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-4 border-t border-b border-zinc-800 text-xs font-mono mb-6">
                    <div>
                      <span className="text-zinc-400 block text-[10px] uppercase">DATABASE</span>
                      <span className="text-white font-medium">PostgreSQL + Prisma</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block text-[10px] uppercase">PAYMENT / HOOKS</span>
                      <span className="text-white font-medium">Stripe Webhook Sync</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block text-[10px] uppercase">FRONTEND</span>
                      <span className="text-white font-medium">React • TypeScript • Tailwind</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block text-[10px] uppercase">LATENCY</span>
                      <span className="text-emerald-400 font-bold">p99 &lt; 140ms</span>
                    </div>
                  </div>
                </div>

                {/* Bracket Links */}
                <div className="flex items-center gap-4 text-xs font-mono">
                  <a
                    href="https://github.com/tanqdev/Acheter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-300 font-medium transition-colors"
                  >
                    [ Live Demo ↗ ]
                  </a>
                  <a
                    href="https://github.com/tanqdev/Acheter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-300 font-medium transition-colors"
                  >
                    [ Source Code ↗ ]
                  </a>
                </div>
              </div>

              {/* Right Column: Console Mockup */}
              <div className="lg:col-span-7">
                <div className="rounded-lg border border-zinc-800 bg-black/95 p-4 sm:p-5 font-mono text-xs">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-zinc-300 text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                      </div>
                      <span className="ml-2 text-zinc-200 font-medium">acheter-storefront.io/console</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>LIVE 200 OK</span>
                    </div>
                  </div>

                  {/* Top Stats 3-Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded border border-zinc-800 bg-zinc-950/80">
                      <span className="text-zinc-400 text-[10px] block uppercase font-medium">TOTAL GMV</span>
                      <span className="text-white text-base sm:text-lg font-bold block my-0.5">$42,910.00</span>
                      <span className="text-emerald-400 text-[11px] font-semibold">↑ 18.4% this cycle</span>
                    </div>

                    <div className="p-3 rounded border border-zinc-800 bg-zinc-950/80">
                      <span className="text-zinc-400 text-[10px] block uppercase font-medium">CONVERSION</span>
                      <span className="text-white text-base sm:text-lg font-bold block my-0.5">4.82%</span>
                      <span className="text-zinc-300 text-[11px]">4,120 sessions</span>
                    </div>

                    <div className="p-3 rounded border border-zinc-800 bg-zinc-950/80">
                      <span className="text-zinc-400 text-[10px] block uppercase font-medium">WEBHOOK SYNC</span>
                      <span className="text-white text-base sm:text-lg font-bold block my-0.5">142ms</span>
                      <span className="text-emerald-400 text-[11px] font-semibold">Zero drop rate</span>
                    </div>
                  </div>

                  {/* Stock Allocation Table */}
                  <div className="rounded border border-zinc-800 bg-zinc-950/60 p-3 overflow-x-auto">
                    <div className="grid grid-cols-12 text-[10px] text-zinc-400 uppercase font-medium pb-2 border-b border-zinc-800 min-w-[360px]">
                      <span className="col-span-6">SKU / PRODUCT</span>
                      <span className="col-span-4 text-center">STOCK ALLOCATION</span>
                      <span className="col-span-2 text-right">PRICE</span>
                    </div>

                    <div className="divide-y divide-zinc-800/80 min-w-[360px]">
                      <div className="grid grid-cols-12 py-2.5 text-xs items-center">
                        <span className="col-span-6 text-zinc-100 font-medium">Mechanical Keyboard Pro (Custom ISO)</span>
                        <span className="col-span-4 text-center text-emerald-400 font-semibold">94 in stock</span>
                        <span className="col-span-2 text-right text-white font-bold">$180.00</span>
                      </div>

                      <div className="grid grid-cols-12 py-2.5 text-xs items-center">
                        <span className="col-span-6 text-zinc-100 font-medium">Studio Monitor Headphone MK-II</span>
                        <span className="col-span-4 text-center text-emerald-400 font-semibold">21 in stock</span>
                        <span className="col-span-2 text-right text-white font-bold">$249.00</span>
                      </div>

                      <div className="grid grid-cols-12 py-2.5 text-xs items-center">
                        <span className="col-span-6 text-zinc-100 font-medium">CNC Precision Desk Mat [Black]</span>
                        <span className="col-span-4 text-center text-amber-400 font-semibold">5 low stock</span>
                        <span className="col-span-2 text-right text-white font-bold">$45.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Grid for ML & Systems Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 02: LOAN DEFAULT PREDICTOR */}
          {(activeTab === "ALL" || activeTab === "SYSTEMS & ML") && (
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="text-indigo-400 font-mono text-xs tracking-wider uppercase mb-2">
                  PROJECT // 02 • FINTECH ML
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  LOAN DEFAULT PREDICTOR
                </h3>
                <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mt-1 mb-4">
                  PREDICTIVE RISK MODELING &amp; EXPLAINABILITY
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Supervised machine learning pipeline evaluating borrower default risk across 40+ macroeconomic and credit history variables using gradient boosting and SHAP value explainability.
                </p>

                {/* Telemetry Box */}
                <div className="rounded-lg border border-zinc-800 bg-black/80 p-4 font-mono text-xs mb-6">
                  <div className="flex justify-between items-center mb-1 text-[11px]">
                    <span className="text-zinc-400 uppercase font-medium">MODEL ARCHITECTURE</span>
                    <span className="text-white font-bold">XGBoost Classifier</span>
                  </div>

                  <div className="flex justify-between items-center text-[11px] mt-2 mb-1.5">
                    <span className="text-zinc-400 uppercase font-medium">VALIDATION SCORE</span>
                    <span className="text-indigo-400 font-bold">ROC-AUC: 0.914</span>
                  </div>

                  {/* Solid White Slider Progress Bar */}
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden my-2">
                    <div className="h-full bg-white rounded-full w-[91.4%]"></div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-zinc-300 pt-2 border-t border-zinc-800">
                    <span>Inference Time: 12ms</span>
                    <span className="text-emerald-400 font-semibold">FastAPI microservice</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "XGBoost", "Scikit-learn", "SHAP", "FastAPI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-900 border border-zinc-700 text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bracket Links */}
              <div className="flex items-center gap-4 text-xs font-mono pt-2">
                <a
                  href="https://github.com/tanqdev/Loan_Default_Pred-HCL-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300 font-medium transition-colors"
                >
                  [ Architecture Spec ↗ ]
                </a>
                <a
                  href="https://github.com/tanqdev/Loan_Default_Pred-HCL-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300 font-medium transition-colors"
                >
                  [ GitHub ↗ ]
                </a>
              </div>
            </div>
          )}

          {/* Project 03: RADSYNC */}
          {(activeTab === "ALL" || activeTab === "SYSTEMS & ML") && (
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
              <div>
                <div className="text-indigo-400 font-mono text-xs tracking-wider uppercase mb-2">
                  PROJECT // 03 • COMPUTER VISION
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  RADSYNC
                </h3>
                <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase mt-1 mb-4">
                  CHEST RADIOGRAPH PATHOLOGY DETECTION
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Deep convolutional neural network trained on clinical radiographic datasets to detect pulmonary pathology, complete with Grad-CAM visual heatmaps for localized diagnostic interpretability.
                </p>

                {/* Telemetry Box */}
                <div className="rounded-lg border border-zinc-800 bg-black/80 p-4 font-mono text-xs mb-6">
                  <div className="flex justify-between items-center mb-1 text-[11px]">
                    <span className="text-zinc-400 uppercase font-medium">CONVOLUTIONAL BACKBONE</span>
                    <span className="text-white font-bold">ResNet-50 (Transfer Learning)</span>
                  </div>

                  <div className="flex justify-between items-center text-[11px] mt-2 mb-1.5">
                    <span className="text-zinc-400 uppercase font-medium">LOCALIZATION METHOD</span>
                    <span className="text-indigo-400 font-bold">Grad-CAM Heatmaps</span>
                  </div>

                  {/* Solid White Slider Progress Bar */}
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden my-2">
                    <div className="h-full bg-white rounded-full w-[94.2%]"></div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-zinc-300 pt-2 border-t border-zinc-800">
                    <span>Sensitivity: 94.2%</span>
                    <span className="text-indigo-400 font-semibold">PyTorch CUDA engine</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["PyTorch", "TorchVision", "Grad-CAM", "NumPy / Pandas"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-zinc-900 border border-zinc-700 text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bracket Links */}
              <div className="flex items-center gap-4 text-xs font-mono pt-2">
                <a
                  href="https://github.com/tanqdev/RadSync-Explainable-Chest-X-Ray-Analysis-Historical-Context"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300 font-medium transition-colors"
                >
                  [ Diagnostic Demo ↗ ]
                </a>
                <a
                  href="https://github.com/tanqdev/RadSync-Explainable-Chest-X-Ray-Analysis-Historical-Context"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-300 font-medium transition-colors"
                >
                  [ GitHub ↗ ]
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 pt-6 border-t border-zinc-800 gap-4">
        <span>More open-source repositories available on GitHub</span>
        <a
          href="https://github.com/tanqdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-300 font-medium transition-colors flex items-center gap-1.5"
        >
          <span>View Archive &amp; Repositories (20+)</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default Work;
