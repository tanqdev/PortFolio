import React from "react";
import particles2 from "../assets/particles2.mp4";
const BgVideo = () => {
  return (
    <>
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-20 opacity-100 "
        src={particles2}
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </>
  );
};

export default BgVideo;
