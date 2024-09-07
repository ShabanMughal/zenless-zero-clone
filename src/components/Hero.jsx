import React from "react";
import Cover from "../assets/video/hero-video.mp4";
import { imgAssets } from "../assets/imgAsset";
import "../App.css";

const Hero = () => {
  document.title = 'Zenless Zone Zero || Home'
  return (
    <div className="h-screen ">
      <div className="absolute top-0">
        <video src={Cover} autoPlay loop muted className="vid-key"></video>
      </div>
      <div className="absolute top-10 left-[10%]">
        <img src={imgAssets.logo} className="w-[70px]" alt="logo" />
      </div>
      <div className="absolute bottom-[25%] left-[10%]">
        <img src={imgAssets.Terms} className="w-[10vw]" alt="logo" />
      </div>
    </div>
  );
};

export default Hero;
