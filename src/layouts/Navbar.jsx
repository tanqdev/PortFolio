import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    { id: "about", name: "About", href: "#about" },
    { id: "works", name: "Works", href: "#works" },
    { id: "skills", name: "Skills", href: "#skills" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  // Continuous deterministic scroll spy to highlight the active section
  useEffect(() => {
    const sectionIds = ["home", "about", "works", "skills", "contact"];

    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const scrollPos = window.scrollY + 200;

        // If user is near the bottom of the page, activate Contact
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 80
        ) {
          setActiveSection("contact");
          return;
        }

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      {/* Outer wrapper — not rounded, so dropdown can extend below */}
      <div className="pointer-events-auto w-full max-w-5xl">
        {/* Top pill bar */}
        <nav
          className="w-full rounded-full border border-white/[0.12] bg-[#030303]/85 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.7)] px-3 sm:px-8 py-2 sm:py-3 transition-all duration-300"
        >
          <div className="flex justify-between items-center gap-2">
            {/* Logo */}
            <a
              href="#home"
              className="text-base sm:text-2xl font-light font-[Playwrite_US_Modern] tracking-wider text-white hover:text-indigo-400 transition-colors shrink-0"
            >
              Tanishq
            </a>

            {/* Desktop Nav Links with Original Glitch Hover & Active Section State */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-7 lg:gap-9">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className={`glitch-link font-mono text-xs uppercase tracking-widest transition-all duration-200 ${
                          isActive ? "active font-bold" : "font-medium"
                        }`}
                        data-text={link.name}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="/Tanishq_Srivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume PDF"
                className="relative overflow-hidden flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs font-mono font-semibold border border-zinc-600 hover:border-white rounded-full cursor-pointer gap-1.5 sm:gap-2 transition-all duration-300 group hover:bg-white hover:text-black text-white bg-zinc-950/60"
              >
                <Download size={13} className="z-10 shrink-0" />
                <span className="z-10 hidden sm:inline">Resume</span>
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-zinc-200 hover:text-white rounded-full border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown — rendered OUTSIDE the rounded pill so it isn't clipped */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-zinc-800 bg-[#030303]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.7)] p-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2.5 px-4 text-sm font-mono uppercase tracking-wider rounded-xl transition-colors ${
                        isActive
                          ? "text-white font-bold bg-white/[0.07]"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <li className="pt-1 mt-1 border-t border-zinc-800">
                <a
                  href="/Tanishq_Srivastava_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-4 text-xs font-mono uppercase tracking-wider rounded-xl bg-white text-black font-bold transition-opacity hover:opacity-90"
                >
                  <span className="flex items-center gap-2">
                    <Download size={13} />
                    Download Resume
                  </span>
                  <span>PDF</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
