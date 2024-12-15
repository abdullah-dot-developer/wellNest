import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/aboutImage.png";
import Identity from "../components/Identity";
import MileStone from "../components/MileStone";
import Expertise from "../components/Expertise";

import GetInTouch from "../components/GetInTouch";
import NewsLetter from "../components/NewsLetter";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-100 to-white flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center w-[92%] mx-auto pt-10 sm:pt-16">
          <span className="text-lg">Welcome to</span>
          <span className="text-2xl md:text-3xl text-center font-[500] max-w-[480px]">
            Revolutionized Healthcare through{" "}
            <span className="text-[#5f77ff]">Innovation</span> and{" "}
            <span className="text-[#5f77ff]">Accessibility</span>.
          </span>
          <button
            onClick={() => navigate("/contact")}
            className="px-5 py-2 bg-[#5F77FF] text-white rounded-full"
          >
            Get in Touch
          </button>
        </div>
        <div className="py-8 md:py-16">
          <img
            src={aboutImage}
            alt="About Image"
            className="md:w-[800px]  flex items-center mx-auto lg:scale-125"
          />
        </div>
      </div>
      <Identity />
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center flex flex-col">
          <span className=" text-[#5d75ff] text-sm sm:text-lg">OUR IMPACT</span>
          <span className="text-2xl md:text-4xl font-[500]">
            Our Milestones
          </span>
        </div>
        {/* <div className="translate-y-36"> */}
        <MileStone />
        {/* </div> */}
      </div>
      <div className="flex flex-col py-8 px-4 items-center bg-gray-50 justify-center mb-10">
        <span className="text-sm text-[#5f77ff] font-[500]">ABOUT US</span>
        <span className="py-2 text-2xl md:text-4xl font-[500]">Our Story</span>
        <p className="text-sm sm:text-[1rem] xl:text-lg text-gray-500 text-center max-w-[750px]">
          Our journey began with a simple yet profound idea: to make healthcare
          more accessible and impactful for everyone. Recognizing the challenges
          of traditional care systems, we set out to bridge the gap through
          innovative solutions. Along the way, we've achieved remarkable
          milestones, empowering countless individuals to prioritize their
          health. But our story is far from over—we're just getting started.
        </p>
      </div>
      <div>
        <Expertise />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
