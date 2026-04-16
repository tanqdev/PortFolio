import React from "react";
import { Linkedin, Github, PhoneCall } from "lucide-react";
import As from "../assets/AntiSpiral.png";
import AsMagenta from "../assets/AntiSpiralMagenta.png";
import AsCyan from "../assets/AntiSpiralCyan.png";

const Hero = () => {
  return (
    <section className="py-10 mb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-64">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-300 ">Hi, I am</h1>

          <div className="relative inline-block mb-4">
            <h1 className="absolute top-2 left-2 text-6xl sm:text-7xl md:text-9xl font-extrabold text-violet-500 z-0 select-none">
              Tanishq <br /> Srivastava
            </h1>
            <h1 className="relative text-6xl sm:text-7xl md:text-9xl font-extrabold text-white z-10">
              Tanishq <br /> Srivastava
            </h1>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-300 ">
            A Web Developer
          </h1>

          <div className="flex justify-start gap-4 py-4 ">
            <a
              href=""
              className="p-2 border border-white rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href=""
              className="p-2 border border-white rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              <Github size={22} />
            </a>
            <button className="group relative flex item-center justify-center gap-2 p-[7px] border border-white rounded-md cursor-pointer transition-all duration-300 px-4 overflow-hidden hover:bg-white hover:text-black">
              <span className="transition-all duration-300 group-hover:opacity-0">
                Contact Me
              </span>
              <PhoneCall
                size={22}
                className="absolute translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </button>
          </div>
        </div>

        <img
          src={As}
          alt="AntiSpiral"
          className=" w-full object-contain opacity-100 mix-blend-screen transition-all duration-300 ease-in-out hover:opacity-90 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)] "
        />
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[24px] h-[48px] border-2 border-white rounded-full flex justify-center">
          <div className="w-[4px] h-[12px] bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
        <span className="mt-2 text-sm text-white/70"></span>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(10px); opacity: 0.5; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .animate-scroll {
              animation: scroll 1.5s infinite;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Hero;
