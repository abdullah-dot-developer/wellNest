import React from "react";
import appleStore from "../assets/Appstore1.png";
import playStore from "../assets/playStore1.webp";
import appleGallery from "../assets/appGallery.jpeg";
import downloadImg from "../assets/CTA2.png";

const NewsLetter = () => {
  return (
    <div className="bg-[#d3daff] rounded-xl w-[92%] mx-auto my-44 grid grid-cols sm:grid-cols-[1fr,1fr] items-center">
      <div>
        <div className="sm:-translate-y-16 lg:-translate-y-20 flex items-center justify-center lg:scale-125">
          <img src={downloadImg} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-start text-left px-10 py-10">
        <span className="text-[1.25rem] md:text-2xl lg:text-4xl font-semibold text-center sm:text-left">
          Get the best healthcare <br /> access to you.
        </span>

        <div className="flex items-center justify-center xl:justify-start gap-2">
          <span>
            <img
              src={playStore}
              alt="Play store"
              className="w-[100px] md:w-[150px] cursor-pointer"
            />
          </span>
          <span>
            <img
              src={appleStore}
              alt="Apple store"
              className="w-[100px] md:w-[150px] cursor-pointer"
            />
          </span>
          <span>
            <img
              src={appleGallery}
              alt="Apple Gallery"
              className="mix-blend-multiply w-[100px] md:w-[150px] cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
