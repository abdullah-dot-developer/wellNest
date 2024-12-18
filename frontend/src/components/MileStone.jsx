import React from "react";

const MileStone = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-[92%] mx-auto my-10 md:my-20">
      <div>
        <p className="text-xl text-center md:text-left md:text-2xl xl:text-3xl font-[500]">
          Top used healthcare app used <br /> by millions of happy users
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 md:gap-3 lg:gap-0 my-4 text-center">
        <div className="flex flex-col lg:border-r-2 border-gray-300">
          <span className="text-3xl lg:text-4xl font-[500] text-[#5f77ff]">
            15 M+
          </span>
          <span className="text-sm text-gray-500">Active Users</span>
        </div>
        <div className="flex flex-col lg:border-r-2 border-gray-300">
          <span className="text-3xl lg:text-4xl font-[500] text-[#5f77ff]">
            3 K+
          </span>
          <span className="text-sm text-gray-500">Health Providers</span>
        </div>
        <div className="flex flex-col  xl:px-4 lg:border-r-2 border-gray-300">
          <span className="text-3xl lg:text-4xl font-[500] text-[#5f77ff]">
            2 M+
          </span>
          <span className="text-sm text-gray-500">
            Download from app stores
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl lg:text-4xl font-[500] text-[#5f77ff]">
            4.7
          </span>
          <span className="text-sm text-gray-500">Rating out of 5</span>
        </div>
      </div>
    </div>
  );
};

export default MileStone;
