import React, { useState } from "react";
import doctor from "../assets/image.png";
import { FaUserDoctor } from "react-icons/fa6";
import { TbMedicineSyrup, TbTestPipeOff } from "react-icons/tb";
import { MdFamilyRestroom, MdOutlineLocalPharmacy } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";

const servicesData = [
  {
    icon: <FaUserDoctor size={20} />,
    title: "Consult Doctor",
    description:
      "Talk to licensed doctors anytime, anywhere. Get expert advice, prescriptions, or second opinions through audio calls, video calls or chat.",
  },
  {
    icon: <TbMedicineSyrup size={20} />,
    title: "Medicine",
    description:
      "Get digital prescriptions and order over-the-counter medicines effortlessly. Enjoy quick delivery and free reminders for refills.",
  },
  {
    icon: <MdOutlineLocalPharmacy size={20} />,
    title: "Pharmacy",
    description:
      "Explore a complete range of health and wellness products. Convenient shopping with trusted quality guaranteed.",
  },
  {
    icon: <IoAnalyticsOutline size={20} />,
    title: "Vitals",
    description:
      "Monitor key health metrics like blood pressure, sugar levels or BMI. Get personalized insights to manage your health better.",
  },
  {
    icon: <MdFamilyRestroom size={20} />,
    title: "Family Records & Checkups",
    description:
      "Manage & track your family’s medical history effortlessly with our secure and reliable e-health records system.",
  },
  {
    icon: <TbTestPipeOff size={20} />,
    title: "Lab Tests",
    description:
      "Book diagnostic tests easily and avoid long queues. Receive accurate, fast results directly in the app.",
  },
];

const QuickActions = () => {
  const [active, setActive] = useState(null);
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[250px] md:w-[400px] mx-auto text-center">
        <span className="text-sm text-[#5f77ff]">QUICK ACTIONS</span>
        <span className="text-2xl font-[500] md:text-4xl md:font-[500]">
          Key features especially for you
        </span>
      </div>
      <div className="grid sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr,0.8fr] lg:grid-cols-[1fr,0.5fr] items-center justify-center my-7 w-[92%] mx-auto">
        <div className="flex justify-center items-center">
          <img src={doctor} alt="Doctors" loading="lazy" />
        </div>
        <div className="flex flex-col items-center">
          {servicesData.map((service) => (
            <div
              className={`grid grid-cols-[0.5fr,1fr] cursor-pointer border-b-2 justify-center p-3 mb-1 ${
                active === service.title && "bg-white"
              }`}
              key={service.title}
              onClick={() => setActive(service.title)}
            >
              <div className={`flex justify-center pt-1 pr-4 text-[#5f77ff]`}>
                {service.icon}
              </div>
              <div className={`flex flex-col text-left `}>
                <span
                  className={`text-xl sm:text-2xl line-clamp-1 font-[500] ${
                    active === service.title && "text-[#5f77ff]"
                  }`}
                >
                  {service.title}
                </span>
                <span
                  className={`text-[1rem] line-clamp-2 lg:line-clamp-3 text-gray-400 ${
                    active === service.title && "text-gray-800"
                  }`}
                >
                  {service.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
