import React, { useState, useRef } from "react";
import { imgAssets, reels } from "../assets/imgAsset";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { MdOutlineLoop } from "react-icons/md";

const Features = () => {
  document.title = 'Zenless Zone Zero || Features'
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const nextSlide = () => {
    setCurrentReelIndex((prevSlide) => (prevSlide + 1) % reels.length);
  };

  const prevSlide = () => {
    setCurrentReelIndex(
      (prevSlide) => (prevSlide - 1 + reels.length) % reels.length
    );
  };

  const handleVideoRestart = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  const handleVideoToggle = () => {
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlay(!play);
  };

  return (
    <div className="h-screen">
      <div
        style={{ backgroundImage: `url(${imgAssets.event_bg})` }}
        className="w-full bg-cover bg-center h-full absolute top-0"
      >
        <div className="relative h-screen">
          <div className="px-10 py-10 flex items-center  gap-10">
            <div className="">
              <video
                ref={videoRef}
                className="w-[17.5vw] absolute top-14 left-[16%] current-slide"
                muted={mute}
                src={reels[currentReelIndex].reel}
              ></video>

              <img
                src={imgAssets.reel_frame}
                className="w-[19vw] absolute top-10 left-[15%]"
                alt=""
              />
              <div className="absolute bottom-[41%] left-[30.7%] flex flex-col gap-3">
                <img
                  src={mute ? imgAssets.mute : imgAssets.nav2}
                  onClick={() => setMute(!mute)}
                  className="w-[2.5vw] cursor-pointer"
                  alt="voice"
                />
                <span
                  className="border-2 rounded-full border-black bg-black p-[3px] cursor-pointer"
                  onClick={handleVideoRestart}
                >
                  <MdOutlineLoop className="text-2xl text-white" />
                </span>
                <span
                  className="border-2 rounded-full border-black bg-zinc-700 p-[3px] cursor-pointer"
                  onClick={handleVideoToggle}
                >
                  {play ? (
                    <FaCirclePause className="text-2xl " />
                  ) : (
                    <FaCirclePlay className="text-2xl " />
                  )}
                </span>
              </div>
              <div className="flex absolute bottom-[29%] left-[28.3%] rotate-90">
                <img
                  className="w-[3.6vw] object-cover cursor-pointer"
                  src={imgAssets.event_back}
                  alt="prev-btn"
                  onClick={prevSlide}
                />

                <img
                  className="w-[3.6vw] object-cover cursor-pointer"
                  src={imgAssets.event_next}
                  alt="next-btn"
                  onClick={nextSlide}
                />
              </div>
            </div>

            <div className="absolute top-14 left-[40%] text-white w-[40%]">
              <h1 className="text-5xl font-[800] text-[#F62976]">
                {reels[currentReelIndex].name}
              </h1>
              <p className="mt-10 font-[600] text-2xl text-zinc-400">
                {reels[currentReelIndex].occup}
              </p>
              <p className="mt-5 font-[600] text-zinc-500">
                {reels[currentReelIndex].char}
              </p>
              <p className="font-[600] text-white mt-2">
                Edit by:{" "}
                <span className="ml-4 font-semibold text-zinc-400">
                  {reels[currentReelIndex].edit}
                </span>
              </p>
              <p className="font-[600] text-white mt-2">
                Application:{" "}
                <span className="ml-4 font-semibold text-zinc-400">
                  {reels[currentReelIndex].app}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
