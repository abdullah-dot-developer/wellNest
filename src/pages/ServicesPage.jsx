import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Autonomy from "../assets/Autonomy.png";
import Features from "../components/Features";
import WellnessToolkit from "../components/WellnessToolkit";
import NewsLetter from "../components/NewsLetter";
import GetInTouch from "../components/GetInTouch";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className="flex flex-col gap-5 items-center justify-center pt-16 ">
          <span className="text-center px-2 text-xl sm:text-3xl lg:text-4xl font-[500]">
            From <span className="text-[#5F77FF]">Consultation</span> to{" "}
            <span className="text-[#5F77FF]">Diagnosis</span> &{" "}
            <span className="text-[#5F77FF]">Treatment</span>,
            <br /> All under one cloud line!
          </span>
          <button
            onClick={() => navigate("/contact")}
            className="px-5 py-2 bg-[#5F77FF] text-white rounded-full"
          >
            Get in Touch
          </button>
          <img
            src={Autonomy}
            alt="Human Autonomy"
            className="mix-blend-multiply"
          />
        </div>
      </div>
      <div>
        <Features />
      </div>
      <div>
        <WellnessToolkit />
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

export default ServicesPage;
