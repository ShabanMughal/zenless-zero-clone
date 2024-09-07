import React, { useRef, useState } from "react";
import { imgAssets } from "../assets/imgAsset";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navigate = () => {
  const containerRef = useRef(null);
  const [isHidden, setIsHidden] = useState(true);

  const container = containerRef.current;
  const handleClick = () => {
    if (isHidden) {
      gsap.to(container, {
        width: 0,
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(container, {
        width: "32vw",
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
    setIsHidden(!isHidden);
  };
  const handleAnim = () => {
    gsap.to(container, {
      width: 0,
      duration: 0.5,
      opacity: 0,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="relative  h-screen">
      <div className="absolute right-0 top-[10%] mx-10 cursor-pointer flex flex-col gap-10 items-end z-10">
        <Link to="/" className="group">
          <span className="text-white font-[800] text-sm opacity-0 group-hover:opacity-100 uppercase transition-opacity duration-300">
            Homepage
          </span>{" "}
          <span className="px-1 py-1 rounded m-5 bg-zinc-500 cursor-pointer hover:bg-red-500"></span>
        </Link>
        <Link to="/char" onClick={handleAnim} className="group">
          <span className="text-white font-[800] text-sm opacity-0 group-hover:opacity-100 uppercase transition-opacity duration-300">
            Characters
          </span>{" "}
          <span className="px-1 py-1 rounded m-5 bg-zinc-500 cursor-pointer hover:bg-red-500"></span>
        </Link>
        <Link to="/event" onClick={handleAnim} className="group">
          <span className="text-white font-[800] text-sm opacity-0 group-hover:opacity-100 uppercase transition-opacity duration-300">
            Events
          </span>{" "}
          <span className="px-1 py-1 rounded m-5 bg-zinc-500 cursor-pointer hover:bg-red-500"></span>
        </Link>
        <Link to="/feature" onClick={handleAnim} className="group">
          <span className="text-white font-[800] text-sm opacity-0 group-hover:opacity-100 uppercase transition-opacity duration-300">
            Features
          </span>{" "}
          <span className="px-1 py-1 rounded m-5 bg-zinc-500 cursor-pointer hover:bg-red-500"></span>
        </Link>
      </div>
      <div className="absolute right-5 bottom-[35%] px-10 flex items-center z-20">
        <div
          ref={containerRef}
          className="bg-zinc-500 flex gap-2 rounded-l-md items-center py-1 px-2 w-[32vw]"
        >
          <div className="flex flex-col gap-2">
            <img src={imgAssets.download1} className="w-[10vw]" alt="" />
            <img src={imgAssets.download2} className="w-[10vw]" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={imgAssets.download3} className="w-[10vw]" alt="" />
            <img src={imgAssets.download4} className="w-[10vw]" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={imgAssets.decor}
              onClick={handleClick}
              className="w-[10vw] cursor-pointer"
              alt=""
            />
            <img src={imgAssets.download5} className="w-[10vw]" alt="" />
          </div>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          <img src={imgAssets.Arrow} className="h-[15vh]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navigate;
