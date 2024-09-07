import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { imgAssets } from "../assets/imgAsset";
import "../App.css";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    marqueeElement.innerHTML += marqueeElement.innerHTML;

    gsap.to(marqueeElement, {
      xPercent: -50,
      ease: "linear",
      repeat: -1,
      duration: 180,
    });
  }, []);

  return (
    <div className="absolute w-full bottom-0 h-[19vh] bg-[#F62976] flex items-center overflow-hidden z-10">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <span className="italic text-[11vw] text-white opacity-15 font-[700] uppercase">
          this game launched by hoyoverse and fight against kuro game
        </span>
        <span className="italic text-[11vw] text-white opacity-15 font-[700] uppercase">
          this game launched by hoyoverse and fight against kuro game
        </span>
      </div>
      <div className="absolute flex items-center mx-24">
        <img src={imgAssets.banner} className="w-[60vw]" alt="banner" />
        <img
          src={imgAssets.btn}
          className="w-[18vw] h-[10vh] object-cover key"
          alt="btn"
        />
      </div>
    </div>
  );
};

export default Marquee;
