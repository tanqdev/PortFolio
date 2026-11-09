import React, { useState, useEffect } from "react";
import { Linkedin, Github, PhoneCall } from "lucide-react";
import As from "../assets/AntiSpiral.png";

const Hero = () => {
  const statements = [
    "I am a Full-Stack Developer",
    "Experienced in Backend Engineering",
    "Worked with AI & Machine Learning",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % statements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, statements.length]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full flex-1 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 my-auto">
        {/* Left Column - Intro & Headings with Continuous Animated Statement */}
        <div className="text-center md:text-left flex-1 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-300 mb-2">
            Hi, I am
          </h1>

          <div className="relative inline-block mb-4">
            <h1 className="absolute top-2 left-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-violet-500 z-0 select-none">
              Tanishq <br /> Srivastava
            </h1>
            <h1 className="relative text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white z-10">
              Tanishq <br /> Srivastava
            </h1>
          </div>

          {/* Animated Text Sequence (Slide-up & Fade every 4s, Zero Layout Shift) */}
          <div
            className="h-8 sm:h-10 md:h-12 relative overflow-hidden flex items-center justify-center md:justify-start mb-6"
            aria-live="polite"
            aria-atomic="true"
          >
            {prevIndex !== null && (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center md:justify-start text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-300 whitespace-nowrap animate-text-slide-out-up select-none pointer-events-none"
              >
                {statements[prevIndex]}
              </div>
            )}
            <div
              onAnimationEnd={() => setPrevIndex(null)}
              className={`absolute inset-0 flex items-center justify-center md:justify-start text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-300 whitespace-nowrap ${
                prevIndex !== null ? "animate-text-slide-in-up" : ""
              }`}
            >
              {statements[currentIndex]}
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/tanishqdev-srivastava/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 border border-zinc-700 hover:border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-zinc-200"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/tanqdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 border border-zinc-700 hover:border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-zinc-200"
            >
              <Github size={22} />
            </a>
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-2 px-5 py-2.5 border border-zinc-600 hover:border-white rounded-lg cursor-pointer transition-all duration-300 overflow-hidden hover:bg-white hover:text-black text-white"
            >
              <span className="font-semibold text-sm transition-all duration-300 group-hover:opacity-0">
                Contact Me
              </span>
              <PhoneCall
                size={20}
                className="absolute translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-black"
              />
            </a>
          </div>
        </div>

        {/* Right Column - Pure AntiSpiral Visual (Zero hover, zero colorful glow) */}
        <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center select-none">
          <img
            src={As}
            alt="AntiSpiral Graphic"
            className="w-full h-full object-contain mix-blend-screen opacity-95"
          />
        </div>
      </div>

      {/* Scroll Down Indicator (Pure Solid White Slider) */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="mt-6 mb-2 flex flex-col items-center cursor-pointer transition-opacity duration-300 hover:opacity-100 opacity-80"
      >
        <div className="w-[24px] h-[44px] border-2 border-white rounded-full flex justify-center">
          <div className="w-[3px] h-[10px] bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
        <span className="mt-2 text-xs font-mono uppercase tracking-widest text-white font-medium">
          Scroll
        </span>
      </a>
    </section>
  );
};

export default Hero;
