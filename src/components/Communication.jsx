import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import vector from "../assets/vector.png";

const Communication = () => {
  return (
    <div className="flex flex-col w-[88%] lg:w-[85%] mx-auto">
      <h1 className="text-2xl text-center font-[500] md:text-3xl lg:text-4xl">
        Seamless Communication
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1fr] gap-4 my-8">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between items-end bg-gradient-to-b from-[#2641dd] to-[#5f77ff] p-3 rounded-2xl text-gray-100 h-[150px] xl:h-[180px] relative">
            <span>info@wellnest.com</span>
            <span className="text-2xl font-[500] z-10">Email Us</span>
            <span className="absolute top-2 right-2">
              <LuMail size={200} className="z-0 text-gray-100 opacity-10" />
            </span>
          </div>
          <div className="flex justify-between items-end bg-gradient-to-r from-gray-300 to-[#7c8fff] p-3 rounded-2xl text-gray-900 h-[150px] xl:h-[180px] relative">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="font-[500] text-sm">Pakistan</span>
                <span className="font-[300]">+92 (51) 2870441</span>
              </div>
              <span className="h-[2px] w-[59px] bg-gray-100" />
              <div className="flex flex-col">
                <span className="font-[500] text-sm">UAE</span>
                <span className="font-[300]">+97 (154) 3416210</span>
              </div>
            </div>
            <span className="text-2xl font-[500] z-10">Let's Talk</span>
            <span className="absolute top-2 right-2">
              <IoCallSharp
                size={150}
                className="z-0 text-gray-100 opacity-10"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-end bg-gradient-to-r from-gray-300 to-gray-500 p-3 rounded-2xl text-gray-900 h-[317px] xl:h-[377px] relative overflow-hidden">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="font-[500] text-sm">HEAD OFFICE</span>
              <span className="font-light">
                Evacuee Trust Complex, Agha Khan Rd,
                <br /> F-5/1, Islamabad, Pakistan.
              </span>
            </div>
            <span className="h-[2px] w-[59px] bg-gray-100" />
            <div className="flex flex-col">
              <span className="font-[500] text-sm">REGIONAL OFFICE</span>
              <span className="font-light">
                Sharjah Media City (Shams) Sharjah,
                <br /> United Arab Emirates.
              </span>
            </div>
          </div>
          <span className="text-2xl font-[500] z-10">Location</span>
          <span className="absolute bottom-2 right-2">
            <MdOutlineLocationOn
              size={150}
              className="z-0 text-gray-100 opacity-10"
            />
          </span>
          <img
            src={vector}
            alt="Vector Imge"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Communication;
