import React, { useState } from "react";
import { FaChevronRight, FaHeartCircleBolt } from "react-icons/fa6";
import { GiHealthCapsule } from "react-icons/gi";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { MdHealthAndSafety } from "react-icons/md";
import { TbCardsFilled } from "react-icons/tb";
import serviceImg from "../assets/service.png";

const servicesData = [
  {
    icon: <FaHeartCircleBolt size={20} />,
    title: "Insurance Tech Suite",
    description:
      "Streamline insurance operations with advanced digital tools. Simplify claims, policies, and customer management effortlessly",
  },
  {
    icon: <TbCardsFilled size={20} />,
    title: "Smart OPD Care System",
    description:
      "Experience seamless outpatient care with our smart, digital-driven OPD solutions. Improve patient management and efficiency.",
  },
  {
    icon: <MdHealthAndSafety size={20} />,
    title: "Adaptable Health & Life Benefits",
    description:
      "Tailor health and life plans to your organization's needs. Flexible solutions for comprehensive employee coverage.",
  },
  {
    icon: <GiHealthCapsule size={20} />,
    title: "Client-Centric Health Products",
    description:
      "Discover affordable health products designed to build and sustain long-term client relationships.",
  },
  {
    icon: <LiaHospitalAltSolid size={20} />,
    title: "Integrated Wellness Programs",
    description:
      "Promote workplace well-being with customized digital wellness solutions for healthier, happier employees.",
  },
];

const Services = () => {
  const [active, setActive] = useState("Smart OPD Care System");
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-[#5f77ff]">SERVICES</span>
        <span className="text-2xl font-[500] md:text-4xl">
          Our Extensive Care Features
        </span>
      </div>
      <div className="grid grid-cols sm:grid-cols-[1fr,1fr] md:grid-cols-[0.5fr,1fr] my-7 lg:mt-10 w-[94%] lg:w-[90%] mx-auto">
        <div className="flex flex-col items-center">
          {servicesData.map((service) => (
            <div
              className={`grid grid-cols-[0.5fr,1fr,0.3fr] cursor-pointer bg-gray-100 justify-center p-3 mb-1 ${
                active === service.title &&
                "bg-white border-l-4 border-[#5f77ff] rounded-tl-md rounded-bl-md"
              }`}
              key={service.title}
              onClick={() => setActive(service.title)}
            >
              <div
                className={`flex justify-center pt-1 pr-4 ${
                  active === service.title && "text-[#5f77ff]"
                }`}
              >
                {service.icon}
              </div>
              <div
                className={`flex flex-col text-left ${
                  active === service.title && "text-[#5f77ff]"
                }`}
              >
                <span className="text-xl sm:text-2xl line-clamp-1 font-[500]">
                  {service.title}
                </span>
                <span
                  className={`text-[1rem] line-clamp-2 text-gray-400 ${
                    active === service.title && "text-gray-800"
                  }`}
                >
                  {service.description}
                </span>
              </div>
              <div
                className={`flex justify-center pt-2 ${
                  active === service.title && "text-[#5f77ff]"
                }`}
              >
                <FaChevronRight />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center sm:translate-y-24 lg:-translate-y-8">
            <img
              src={serviceImg}
              alt="Service Image"
              className="bg-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
