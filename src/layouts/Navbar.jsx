import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#030303]/40 border-b border-white/[0.08] transition-colors">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-light font-[Playwrite_US_Modern] tracking-wider text-white hover:text-indigo-400 transition-colors"
          >
            Tanishq
          </a>

          {/* Desktop Nav Links with High-Contrast Text */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="glitch-link font-mono text-xs uppercase tracking-widest text-zinc-200 hover:text-white font-medium"
                    data-text={link.name}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="relative overflow-hidden flex items-center px-4 py-2 text-xs font-mono font-semibold border border-zinc-500 hover:border-white rounded cursor-pointer gap-2 transition-all duration-300 group hover:text-black"
            >
              <Download size={14} className="z-10" />
              <span className="z-10">Resume</span>
              <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-200 hover:text-white rounded border border-zinc-700 hover:border-zinc-500 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800 bg-[#030303]/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-2 px-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-sm font-mono uppercase tracking-wider rounded text-zinc-200 hover:text-white hover:bg-zinc-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
