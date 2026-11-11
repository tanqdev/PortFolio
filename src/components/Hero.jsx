import React, { useState, useEffect, useRef, useCallback } from "react";
import { Linkedin, Github, Code2, PhoneCall } from "lucide-react";
import As from "../assets/AntiSpiral.png";

// Unicode pixel blocks ordered by visual density
const PIXEL_BLOCKS = ["█", "▓", "▒", "░", "■", "▀", "▄", "▌", "▐", "▖", "▗", "▘", "▙", "▚", "▛", "▜", "▝", "▞", "▟"];
const PIXEL_DISSOLVE_DURATION = 1100; // Duration in ms for prominent pixel transition
const CYCLE_INTERVAL = 3800;          // Cycle interval in ms

function usePixelatedText(initialText) {
  const [display, setDisplay] = useState(initialText);
  const [isPixelating, setIsPixelating] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const prevTextRef = useRef(initialText);

  const transitionTo = useCallback((targetText) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    setIsPixelating(true);

    const sourceText = prevTextRef.current;
    const maxLen = Math.max(sourceText.length, targetText.length);

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / PIXEL_DISSOLVE_DURATION, 1);

      // Phase 1 (0.00 - 0.35): Current text dissolves into chaotic pixel blocks
      if (progress < 0.35) {
        const dissolveProgress = progress / 0.35;
        const result = sourceText
          .padEnd(maxLen, " ")
          .split("")
          .map((ch) => {
            if (ch === " ") return " ";
            if (Math.random() < dissolveProgress * 0.95 + 0.05) {
              return PIXEL_BLOCKS[Math.floor(Math.random() * PIXEL_BLOCKS.length)];
            }
            return ch;
          })
          .join("");
        setDisplay(result);
      }
      // Phase 2 (0.35 - 1.00): Target text crystallizes from pixel blocks left-to-right
      else {
        const buildProgress = (progress - 0.35) / 0.65;
        const resolvedCount = Math.floor(buildProgress * targetText.length);

        const result = targetText
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < resolvedCount) {
              return ch; // Solid clean letter
            }
            if (i === resolvedCount) {
              return "█"; // Glowing leading pixel cursor
            }
            if (i <= resolvedCount + 3) {
              // Dense trailing pixel blocks near the cursor
              return PIXEL_BLOCKS[Math.floor(Math.random() * 4)];
            }
            // Fainter background pixel noise
            return PIXEL_BLOCKS[Math.floor(Math.random() * PIXEL_BLOCKS.length)];
          })
          .join("");

        setDisplay(result);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(targetText);
        prevTextRef.current = targetText;
        setIsPixelating(false);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { display, isPixelating, transitionTo };
}

const Hero = () => {
  const statements = [
    "A Full-Stack Developer",
    "Experienced in Backend Engineering",
    "Worked with AI & Machine Learning",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { display, isPixelating, transitionTo } = usePixelatedText(statements[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % statements.length;
      setCurrentIndex(next);
      transitionTo(statements[next]);
    }, CYCLE_INTERVAL);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, transitionTo]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
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

          {/* Pixelated Text Sequence — retro digital block dissolve every 3.8s */}
          <div
            className="h-8 sm:h-10 md:h-12 relative flex items-center justify-center md:justify-start mb-6"
            aria-live="polite"
            aria-atomic="true"
            aria-label={statements[currentIndex]}
          >
            <span
              aria-hidden="true"
              className={`text-lg sm:text-2xl md:text-3xl font-extrabold whitespace-nowrap font-mono-code select-none transition-all duration-100 ${
                isPixelating
                  ? "text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "text-gray-300 tracking-tight"
              }`}
            >
              {display}
            </span>
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
              href="https://leetcode.com/u/tanqdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile (500+ Solved)"
              title="LeetCode Profile (500+ Solved)"
              className="p-2.5 border border-zinc-700 hover:border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-zinc-200"
            >
              <Code2 size={22} />
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
