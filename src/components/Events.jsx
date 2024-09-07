import React, { useEffect, useState, useRef } from "react";
import { imgAssets } from "../assets/imgAsset";
import { event } from "../assets/imgAsset";
import gsap from "gsap";

const Events = () => {
  document.title = 'Zenless Zone Zero || Events'
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current = setInterval(() => {
      setSlide((prev) => (prev === event.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideRef.current);
  }, []);

  const nextSlide = () => {
    setDirection("next");
    setSlide((prevSlide) => (prevSlide + 1) % event.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setSlide((prevSlide) => (prevSlide - 1 + event.length) % event.length);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    if (direction === "next") {
      tl.fromTo(
        ".current-slide",
        { x: 0, opacity: 1 },
        { x: -400, opacity: 1, duration: 1 }
      ).fromTo(
        ".next-slide",
        { x: 400, opacity: 1 },
        { x: 0, opacity: 1, duration: 1 },
        "<"
      );
    } else if (direction === "prev") {
      tl.fromTo(
        ".current-slide",
        { x: 0, opacity: 1 },
        { x: 400, opacity: 1, duration: 1 }
      ).fromTo(
        ".next-slide",
        { x: -400, opacity: 1 },
        { x: 0, opacity: 1, duration: 1 },
        "<"
      );
    }
  }, [slide, direction]);

  return (
    <div className="h-screen">
      <div
        style={{ backgroundImage: `url(${imgAssets.event_bg})` }}
        className="w-full bg-cover bg-center h-full absolute top-0"
      >
        <div className="absolute top-5 left-[10%]">
          <img
            src={imgAssets.logo}
            className=" w-[4vw] object-cover"
            alt="logo"
          />
        </div>
        <div className="flex justify-between items-center px-[14%] pt-[10%] gap-10">
          <div>
            <h1 className="uppercase mb-[10%] font-[800] text-4xl text-purple-500 tracking-tighter">
              All New-ptogram
            </h1>
            <p className="font-[900] text-white tracking-tight">
              Log in for a total 7 days to earn Encrypted Master Tape X 10!
            </p>
            <p className="font-[900] text-white tracking-tight">
              -See you on the Exclutive Channel
            </p>
            <div className="flex gap-5 mt-[10%]">
              <img
                className="w-[6vw] h-[6vw] object-cover"
                src={event[slide].item1}
                alt="item"
              />
              <img
                className="w-[6vw] h-[6vw] object-cover"
                src={event[slide].item2}
                alt="item"
              />
              <img
                className="w-[6vw] h-[6vw] object-cover"
                src={event[slide].item3}
                alt="item"
              />
              <img
                className="w-[6vw] h-[6vw] object-cover"
                src={event[slide].item4}
                alt="item"
              />
            </div>
          </div>

          <div className="relative">
            <div className="">
              <img className="w-[50vw]" src={imgAssets.tv_frame} alt="frame" />
            </div>
            <div className="absolute top-6 left-6 flex overflow-hidden">
              <img
                className="w-[38vw] h-[35vh] object-cover current-slide"
                src={event[slide].slide}
                alt="current-slide"
              />

              <img
                className="w-[38vw] h-[35vh] object-cover next-slide absolute"
                src={
                  event[
                    (slide + (direction === "next" ? 1 : -1) + event.length) %
                      event.length
                  ].slide
                }
                alt="next-slide"
              />
            </div>

            <div className="flex absolute bottom-[13px] right-5">
              <img
                className="w-[4.1vw] object-cover cursor-pointer"
                src={imgAssets.event_back}
                alt="prev-btn"
                onClick={prevSlide}
              />

              <img
                className="w-[4.1vw] object-cover cursor-pointer"
                src={imgAssets.event_next}
                alt="next-btn"
                onClick={nextSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
