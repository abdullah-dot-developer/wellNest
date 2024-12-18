import React from "react";
import vector from "../assets/vector.png";

const GetInTouch = () => {
  return (
    <div className="bg-black w-[80%] mx-auto py-8 flex flex-col gap-4 items-center justify-center rounded-3xl mb-16 relative overflow-hidden">
      <span className=" text-2xl sm:text-3xl md:text-5xl text-[#5F77FF] md:font-semibold">
        Want to know more?
      </span>
      <button className="px-5 py-2 bg-[#5F77FF] text-white rounded-full">
        Get in Touch
      </button>
      <div className="absolute w-[300px] top-0 left-0">
        <img
          src={vector}
          alt="Vector Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
