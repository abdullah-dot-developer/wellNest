import React from "react";
import appleStore from "../assets/Appstore1.png";
import playStore from "../assets/playstore1.webp";
import appleGallery from "../assets/appGallery.jpeg";
import downloadImg from "../assets/dowload.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CallToAction = () => {
  return (
    <div>
      <div className="bg-[#d3daff] rounded-xl w-[92%] mx-auto my-32 grid grid-cols sm:grid-cols-[1fr,1fr] items-center overflow-x-clip">
        <div className="flex flex-col justify-start text-left px-10 py-10">
          <span className="text-[1.25rem] md:text-2xl lg:text-4xl font-semibold text-center sm:text-left">
            Get the best healthcare <br /> access to you.
          </span>
          <span className="text-gray-500 text-sm lg:text-lg py-6 text-center sm:text-left">
            Your health, your way! Smarter care is just a tap away. <br /> Get
            the app and stay connected to wellness.
          </span>
          <div className="flex items-center justify-center xl:justify-start gap-2">
            <span>
              <img
                src={playStore}
                alt="Play store"
                loading="lazy"
                className="w-[100px] md:w-[150px] cursor-pointer"
              />
            </span>
            <span>
              <img
                src={appleStore}
                alt="Apple store"
                loading="lazy"
                className="w-[100px] md:w-[150px] cursor-pointer"
              />
            </span>
            <span>
              <img
                src={appleGallery}
                alt="Apple Gallery"
                loading="lazy"
                className="mix-blend-multiply w-[100px] md:w-[150px] cursor-pointer"
              />
            </span>
          </div>
        </div>
        <div>
          <div className="lg:-translate-y-32 lg:scale-110">
            <LazyLoadImage src={downloadImg} alt="Image" effect="blur" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
