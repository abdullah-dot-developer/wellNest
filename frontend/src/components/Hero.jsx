import React from "react";
import ladyDoc from "../assets/lady.png";
import maleDoc2 from "../assets/doctor1.png";
import maleDoc1 from "../assets/doctor2.png";
import hero from "../assets/hero1.png";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { TbMedicineSyrup } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { GrDocumentTest } from "react-icons/gr";
import MileStone from "./MileStone";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      <div>
        <div className="pt-20 flex flex-col items-center justify-center">
          <div className="flex items-center justify-between border border-black rounded-full w[330px] max-w-[430px] p-2 mx-auto">
            <div className="flex -space-x-1 sm:-space-x-2 border-r-2 border-black px-3">
              <img
                src={ladyDoc}
                alt="Lady doctor"
                className="w-6 h-6 sm:w-10 sm:h-10 object-cover rounded-full "
              />
              <img
                src={maleDoc1}
                alt="Male doctor"
                className="w-6 h-6 sm:w-10 sm:h-10 rounded-full "
              />
              <img
                src={maleDoc2}
                alt="Male doctor"
                className="w-6 h-6 sm:w-10 sm:h-10 rounded-full "
              />
            </div>
            <span className="px-2 text-sm sm:px-3 sm:text-lg">
              Talk to over 100+ online doctors
            </span>
          </div>
          <div className="text-center text-2xl md:text-4xl font-semibold my-5 sm:my-7 w-[300px] sm:w-[400px] mx-auto">
            <span>
              One Technology <br /> Millions{" "}
              <span className="text-[#5F77FF]">Improved</span> Lives.
            </span>
          </div>
          <div className="cursor-pointer">
            <button
              onClick={() => navigate("/contact")}
              className="px-5 py-2 bg-[#5F77FF] text-white rounded-full cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img src={hero} alt="hero" className="w-[900px] object-cover" />

            {/* <div className="absolute top-[33%] left-[12%] lg:left-[25%] 2xl:left-[30%]  flex items-center gap-1 sm:gap-2 rounded-full bg-[#ecd6fa] px-2 py-1 sm:px-3 sm:py-2">
              <span>
                <LiaHospitalAltSolid className="w-3 h-3 sm:w-5 sm:h-5" />
              </span>
              <span className="text-[0.7rem] sm:text-lg">Hospital Visit</span>
            </div>
            <div className="absolute top-[33%] right-[11%] lg:right-[23%] 2xl:right-[28%] flex items-center gap-1 sm:gap-2 rounded-full bg-[#ffb489] px-2 py-1 sm:px-3 sm:py-2">
              <span>
                <TbMedicineSyrup className="w-3 h-3 sm:w-5 sm:h-5" />
              </span>
              <span className="text-[0.7rem] sm:text-lg">
                Medicines Reminders
              </span>
            </div>
            <div className="absolute top-[50%] right-[2%] lg:right-[10%] xl:right-[15%] flex items-center gap-1 sm:gap-2 rounded-full bg-[#b0edca] px-2 py-1 sm:px-3 sm:py-2">
              <span>
                <FaUserDoctor className="w-3 h-3 sm:w-5 sm:h-5" />
              </span>
              <span className="text-[0.7rem] sm:text-lg">Consult Doctors</span>
            </div>
            <div className="absolute top-[60%] left-[10%] lg:left-[15%] xl:left-[20%] 2xl:left-[23%] flex items-center gap-1 sm:gap-2 rounded-full bg-[#accdff] px-2 py-1 sm:px-3 sm:py-2">
              <span>
                <GrDocumentTest className="w-3 h-3 sm:w-5 sm:h-5" />
              </span>
              <span className="text-[0.7rem] sm:text-lg">Lab Tests</span>
            </div> */}
          </div>
        </div>
        <div className="text-center  flex flex-col">
          <span className=" text-[#5d75ff] text-sm sm:text-lg">OUR IMPACT</span>
          <span className="text-2xl md:text-4xl font-[500]">
            Our Milestones
          </span>
        </div>
        <div className="">
          <MileStone />
        </div>
      </div>
    </div>
  );
};

export default Hero;
