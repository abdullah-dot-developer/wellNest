import React from "react";
import mainImg from "../assets/main.png";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { TbMedicineSyrup } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { GrDocumentTest } from "react-icons/gr";
import { MdOutlineInsights, MdOutlineLocalPharmacy } from "react-icons/md";

const Toolkit = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <span className="text-sm text-[#5f77ff]">IN APP FEATURES</span>
        <span className="text-2xl font-[500] md:text-4xl md:font-semibold">
          Our Wellness Toolkit
        </span>
      </div>
      <div className="relative">
        <div className="flex items-center justify-center">
          <img src={mainImg} alt="Main Image" className="mix-blend-multiply" />
        </div>

        <div className="absolute top-[22%] left-[8%] lg:left-[14%]  flex items-center gap-1 sm:gap-2 rounded-full bg-[#ffb489] px-1 py-1 sm:px-3 sm:py-2">
          <span>
            <TbMedicineSyrup className="w-3 h-3 sm:w-5 sm:h-5" />
          </span>
          <span className="text-[10px] sm:text-lg">Medicines Reminders</span>
        </div>
        <div className="absolute top-[35%] left-[2%] lg:left-[10%] xl:left-[10%] flex items-center gap-1 sm:gap-2 rounded-full bg-[#b0edca] px-2 py-1 sm:px-3 sm:py-2">
          <span>
            <FaUserDoctor className="w-3 h-3 sm:w-5 sm:h-5" />
          </span>
          <span className="text-[10px] sm:text-lg">Consult Doctors</span>
        </div>
        <div className="absolute top-[45%] left-[28%] lg:left-[28%]   flex items-center gap-1 sm:gap-2 rounded-full bg-[#ffedbb] px-2 py-1 sm:px-3 sm:py-2">
          <span>
            <MdOutlineLocalPharmacy className="w-3 h-3 sm:w-5 sm:h-5" />
          </span>
          <span className="text-[10px] sm:text-lg">Pharmacy</span>
        </div>
        <div className="absolute top-[56%] left-[6%] lg:left-[10%]   flex items-center gap-1 sm:gap-2 rounded-full bg-[#ecd6fa] px-2 py-1 sm:px-3 sm:py-2">
          <span>
            <LiaHospitalAltSolid className="w-3 h-3 sm:w-5 sm:h-5" />
          </span>
          <span className="text-[10px] sm:text-lg">Hospital Visit</span>
        </div>

        <div className="absolute top-[68%] left-[28%]   flex items-center gap-1 sm:gap-2 rounded-full bg-[#ffdf88] px-2 py-1 sm:px-3 sm:py-2">
          <span>
            <MdOutlineInsights className="w-3 h-3 sm:w-5 sm:h-5" />
          </span>
          <span className="text-[10px] sm:text-lg">Viral Insights</span>
        </div>

        <div className="absolute top-[78%] left-[10%] lg:left-[15%] xl:left-[18%]  flex items-center gap-1 sm:gap-2 rounded-full bg-[#accdff] px-2 py-1 sm:px-3 sm:py-2">
          <span>
            <GrDocumentTest className="w-3 h-3 sm:w-5 sm:h-5" />
          </span>
          <span className="text-[10px] sm:text-lg">Lab Tests</span>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
