import React from "react";
import mission from "../assets/mission.jpeg";

const Identity = () => {
  return (
    <div>
      <div className="py-8 sm:py-16 ">
        <div className="flex flex-col w-[92%] mx-auto items-center justify-center">
          <span className="text-sm text-[#5f77ff] font-[500]">
            OUR IDENTITY
          </span>
          <span className="py-2 text-2xl md:text-4xl font-[500]">
            Behind The Brand
          </span>
          <p className="text-sm sm:text-[1rem] xl:text-lg text-gray-500 text-center max-w-[800px]">
            We are the pioneers of AI driven healthcare innovation, dedicated to
            simplify the access to medical services. At our core, we infuse
            technology with care to create a platform that connects patients,
            doctors, and healthcare providers in a seamless ecosystem. Our
            identity is rooted in trust, accessibility, and excellence —
            ensuring that every user experiences customized, reliable, and
            efficient care. With us, healthcare isn't just a service; it's a
            commitment to empowering healthier lives.
          </p>
        </div>
        <div className="md:grid md:grid-cols-[0.8fr,1fr] items-center lg:items-start gap-2 md:pl-6 py-6 md:py-12 xl:py-20">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start py-8 md:py-2 px-3">
            <span className="text-sm text-[#5f77ff] font-[500] md:text-left">
              OUR MISSION
            </span>
            <span className="py-2 text-2xl md:text-3xl lg:text-4xl font-[500] md:text-left">
              Future of Exceptional Care
            </span>
            <p className="text-sm sm:text-[1rem] xl:text-lg text-gray-500 text-center md:text-start ">
              Our mission is to bridge the gap between patients and healthcare
              providers, as we strive to make quality care accessible to
              everyone, anytime, anywhere. We are revolutionizing healthcare by
              providing smooth, accessible, and comprehensive digital health
              solutions. We aim to empower our consumers to take control of
              their well-being through AI driven technology, offering everything
              from appointments to accessible medical records — all in one
              place. We are creating a healthier, happier world!
            </p>
          </div>
          <div className="w-[92%] h-[300px] mx-auto md:w-full bg-cover">
            <img
              src={mission}
              alt="Mission Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
