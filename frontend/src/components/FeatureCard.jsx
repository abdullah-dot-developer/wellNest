import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="max-w-[400px] flex flex-col items-center justify-center sm:items-start shadow-sm sm:justify-start gap-2 px-4 py-6 box-border h-[250px] xl:h-[300px] rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 hover:bg-gradient-to-b hover:from-[#5f77ff] hover:to-[#7084f5] cursor-pointer hover:text-white hover:shadow-xl relative overflow-hidden group">
      {/* Image */}
      <div>
        <img src={image} alt={title} className="w-[70px]" loading="lazy" />
      </div>

      {/* Title */}
      <h1 className="text-xl text-center sm:text-left md:text-2xl xl:text-3xl font-[500] group-hover:text-white">
        {title}
      </h1>

      {/* Description */}
      <span className="text-sm text-center sm:text-left md:text-[1rem] text-gray-500 group-hover:text-gray-200 relative">
        {description}

        {/* Link Icon */}
        <div className="absolute right-0 bottom-[-30px] text-white opacity-0 group-hover:opacity-100 group-hover:bottom-[-10px] transition-all duration-500 ease-in-out">
          <FaExternalLinkAlt size={25} className="cursor-pointer" />
        </div>
      </span>
    </div>
  );
};

export default FeatureCard;
