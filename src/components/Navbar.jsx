import React, { useState, useRef, useEffect } from "react";
import { imgAssets } from "../assets/imgAsset";
import bg_audio from "../assets/audio/bg-audio.mp3";

const Navbar = () => {
  const [music, setMusic] = useState(false);
  const audioRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

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

  const toggleMusic = () => {
    if (music) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusic(!music);
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      audioRef.current.pause();
    } else if (music) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [music]);

  return (
    <div className="relative  z-10">
      <div className="flex gap-5 justify-end p-5 mx-10">
        <img
          onClick={() => setIsVideoVisible(true)}
          src={imgAssets.nav1}
          className="w-[40px] h-[40px] object-cover opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        />
        <img
          onClick={toggleMusic}
          src={music ? imgAssets.nav2 : imgAssets.mute}
          className="w-[40px] h-[40px] object-cover opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        />
        <img
          src={imgAssets.nav3}
          className="w-[40px] h-[40px] object-cover opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        />
        <img
          src={imgAssets.nav4}
          className="w-[40px] h-[40px] object-cover opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        />
        <img
          src={imgAssets.nav5}
          className="w-[40px] h-[40px] object-cover opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        />
        <img
          src={imgAssets.nav6}
          className="w-[40px] h-[40px] object-cover opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
        />
        <audio ref={audioRef} src={bg_audio} />
      </div>
      {isVideoVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/75 z-100 flex items-center justify-center"
          ref={videoRef}
        >
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/C5WS9Ohb-fI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[50%] h-[50%] object-cover z-100"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
