import React, { useState, useEffect, useRef } from "react";
import { imgAssets, characters } from "../assets/imgAsset";
import { FaAngleRight } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import gsap from "gsap";

const Characters = () => {
  document.title = 'Zenless Zone Zero || Characters'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === characters.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".char-image",
      { x: 100, opacity: 0.5 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".title",
      { opacity: 0 },
      { opacity: 1, delay: 2, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".desc",
      { opacity: 0 },
      { opacity: 1, delay: 2.3, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".char-name",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 1, ease: "power2.out" }
    );
  }, [currentSlide]);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
    stopSlideshow();
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoToggle = () => {
    setIsVideoVisible((prev) => !prev);
    stopSlideshow();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === videoRef.current) {
        setIsVideoVisible(false);
      }
    };

    if (isVideoVisible) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isVideoVisible]);

  const renderNavButtons = () =>
    [0, 1, 2].map((index) => (
      <img
        key={index}
        src={characters[currentSlide][`nav${index + 1}`]}
        className="w-[4.5vw] object-cover cursor-pointer"
        alt={`nav${index + 1}`}
        onClick={() => {
          setCurrentSlide(index);
          stopSlideshow();
        }}
      />
    ));

  return (
    <div className="h-screen">
      <div
        className="w-full bg-cover bg-center h-full absolute top-0"
        style={{ backgroundImage: `url(${characters[currentSlide].bg})` }}
      >
        <img
          src={imgAssets.logo}
          className="absolute top-5 left-[10%] w-[4vw] object-cover"
          alt="logo"
        />
        <img
          src={characters[currentSlide].name}
          className="absolute bottom-[38%] left-[12%] w-[40vw] object-cover char-name"
          alt="character"
        />
        <img
          src={characters[currentSlide].shadow}
          className="absolute bottom-[38%] left-[12%] w-[40vw] object-cover"
          alt="character shadow"
        />
        <img
          src={characters[currentSlide].char}
          className="absolute top-0 right-[20%] w-[50vw] object-cover char-image"
          alt="character"
          onClick={stopSlideshow}
        />

        {isVideoVisible && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/75 z-50 flex items-center justify-center"
            ref={videoRef}
          >
            <video
              src={characters[currentSlide].video}
              controls
              autoPlay
              className="w-[70%] object-cover"
            />
          </div>
        )}

        <div className="absolute top-[20%] right-[17%] flex flex-col gap-5">
          {renderNavButtons()}
        </div>

        <div className="absolute bottom-[30%] right-[17%]">
          <div className="group flex justify-center items-center w-[12vw] p-1 border-2 border-zinc-500 bg-black rounded-full cursor-pointer relative">
            <span className="text-zinc-500 font-[800] text-xl z-10 group-hover:text-black transition-colors duration-500">
              More
            </span>
            <span className="absolute right-1 bg-zinc-500 p-1 flex justify-end items-center rounded-full transition-all duration-500 group-hover:pl-[79%]">
              <FaAngleRight className="text-xl text-black" />
            </span>
          </div>
        </div>

        <div className="absolute bottom-[30%] left-[10%]">
          <div
            className="group flex justify-center items-center w-[12vw] p-1 border-2 border-zinc-500 bg-black rounded-full cursor-pointer relative"
            onClick={isPlaying ? handlePause : handlePlay}
          >
            <span className="text-zinc-500 font-[800] text-xl z-10 group-hover:text-black transition-colors duration-500">
              Voice
            </span>
            <span className="absolute right-1 bg-zinc-500 p-1 flex justify-end items-center rounded-full transition-all duration-500 group-hover:pl-[82%]">
              <img src={imgAssets.Mic} className="w-[15px]" alt="mic" />
            </span>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={characters[currentSlide].audio}
          onEnded={handleAudioEnd}
        />

        <div className="absolute top-[15%] left-[10%] flex gap-5 items-center">
          <div className="relative flex items-center justify-center">
            <img
              src={imgAssets.video_cover}
              className="w-[10.8vw] object-cover"
              alt="cover"
            />
            <img
              src={
                isHovered
                  ? characters[currentSlide].gif
                  : characters[currentSlide].cover
              }
              className="w-[10vw] absolute top-1 left-[4%] cursor-pointer rounded-md object-cover"
              alt="cover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleVideoToggle}
            />
            <span className="absolute top-6">
              <IoPlayCircleOutline className="text-2xl text-zinc-500" />
            </span>
          </div>
          <div className="w-[47%]">
            <p className="text-zinc-500 font-[600] text-md leading-tight desc">
              {characters[currentSlide].desc}
            </p>
            <p className="text-white font-[800] text-4xl title">
              {characters[currentSlide].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
