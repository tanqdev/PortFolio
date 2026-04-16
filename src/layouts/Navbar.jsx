import React from "react";
import { NavLink } from "react-router-dom";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-1 py-4">
        <div className="flex h-12 justify-between items-center">
          <div className="text-2xl font-thin font-[Playwrite_US_Modern]">
            Tanishq
          </div>
          <div>
            <ul className="flex gap-16 cursor-pointer">
              {["Home", "About", "Works", "Contact"].map((text) => (
                <li key={text}>
                  <a href="#" className="glitch-link" data-text={text}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button className="relative overflow-hidden flex items-center p-2 px-5 border rounded-md cursor-pointer gap-1 transition-all duration-300 group hover:text-black">
            <Download size={16} className="z-10" />
            <span className="z-10">Resume</span>
            <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out "></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
