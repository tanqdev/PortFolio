import React from "react";
import Navbar from "./layouts/Navbar";
import Hero from "./components/Hero";
import BgVideo from "./components/BgVideo";
import Work from "./components/Work";

const App = () => {
  return (
    <div>
      <BgVideo />
      <Navbar />
      <Hero />
      <Work />
    </div>
  );
};

export default App;
