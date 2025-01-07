import React from "react";
import InsideOutImg from "../assets/insideOutImg.png";
import inPerson from "../assets/InPerson.png";
import layer from "../assets/layer.png";
import capsule from "../assets/capsule.png";

const WellnessToolkit = () => {
  return (
    <div className="my-20 w-[90%] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl md:text-4xl font-[500] pb-8 text-center">
          Our Wellness Toolkit
        </span>
        <div className="grid lg:grid-cols-[1fr,0.5fr] gap-6 lg:gap-8 my-8 ">
          <div className="bg-[#ecf1ff] pl-4 lg:pl-8 pt-10 rounded-2xl md:grid md:grid-cols-[1fr,0.8fr]">
            <div className="flex flex-col justify-center text-left">
              <span className="text-2xl font-[500] md:text-3xl">
                Telemedicine & Online Consultations
              </span>
              <span className="text-sm text-gray-500 py-4 xl:text-lg">
                Providing remote consultations with licensed healthcare
                professionals across various specialties. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </span>
              <a className="text-sm text-[#2746f3] pt-2 pb-4 hover:underline cursor-pointer">
                Learn More
              </a>
            </div>

            {/* Images */}
            <span>
              <img
                src={InsideOutImg}
                alt="InsideOutImage"
                className=""
                loading="lazy"
              />
            </span>
          </div>
          <div className="bg-[#5f77ff] flex flex-col md:grid md:grid-cols-[1fr,0.8fr] lg:flex lg:flex-col items-center justify-center rounded-2xl">
            <div className="p-4 md:p-8 flex flex-col text-white items-center justify-center">
              <span className="text-2xl lg:text-3xl font-[500] text-center">
                Family Health Management
              </span>
              <span className="text-sm text-center py-4 lg:text-lg text-gray-200">
                Manage and track medical info for you and your family, including
                vitals, appointments, and medical history in one place. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <a className="lg:text-xl">Learn More</a>
            </div>
            <span>
              <img src={inPerson} alt="In Person Image" />
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-[0.8fr,1fr] items-center justify-center gap-6 lg:gap-8 my-8">
          <div className="bg-[#dadbde] bg-opacity-30 pt-6 px-5 rounded-2xl sm:flex xl:h-[250px]">
            <span className="flex items-center justify-center my-3">
              <img
                src={capsule}
                alt="Capsule Image"
                className="w-[100px] sm:w-[350px]"
              />
            </span>
            <div className="flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-[500] text-left">
                Prescription Management
              </span>
              <span className="text-sm text-gray-900 py-4 text-left sm:text-lg">
                Offering digital prescription services where users can consult,
                receive prescriptions, and manage their medications. Lorem ipsum
                dolor sit amet, aliqua.
              </span>
              <a className="text-sm text-[#2746f3] pt-2 pb-4 hover:underline">
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-[#ecf1ff] pt-6 pl-5 rounded-2xl sm:flex">
            <div className="flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-[500] text-left">
                AI-Driven Health Assistance
              </span>
              <span className="text-sm text-gray-900 py-4 text-left sm:text-lg">
                Using advanced AI technology to provide instant health advice,
                symptom checking, and personalized care recommendations. Lorem
                ipsum dolor sit amet, consectetur adipiscing aliqua.
              </span>
              <a className="text-sm text-[#2746f3] pt-2 pb-4 hover:underline">
                Learn More
              </a>
            </div>
            <span className="flex justify-center">
              <img
                src={layer}
                alt="Capsule Image"
                className="lg:w-[550px] h-full "
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessToolkit;
