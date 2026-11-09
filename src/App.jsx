import React from "react";
import Navbar from "./layouts/Navbar";
import Hero from "./components/Hero";
import AbstractBackground from "./components/AbstractBackground";
import About from "./components/About";
import Work from "./components/Work";
import TechArsenal from "./components/TechArsenal";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen text-white selection:bg-indigo-600 selection:text-white">
      {/* Abstract Background Layer (z-0) */}
      <AbstractBackground />

      {/* Foreground Content Layer (z-10) */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <TechArsenal />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
