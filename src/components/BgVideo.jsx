import React from "react";
import particles4 from "../assets/particles4.mp4";

const BgVideo = ({ videoSrc = particles4 }) => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-20">
      <video
        className="w-full h-full object-cover opacity-60 scale-105 transition-opacity duration-700"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark gradient overlay for text readability & cyberpunk ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/95 pointer-events-none" />
    </div>
  );
};

export default BgVideo;
