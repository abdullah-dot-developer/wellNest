import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImg from "../assets/contact.png";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { PiCameraPlusBold } from "react-icons/pi";
import ContactForm from "../components/ContactForm";
import Communication from "../components/Communication";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col gap-6 items-center justify-center bg-gradient-to-b from-gray-100 to-white">
        <h1 className="mt-16 mb-4 md:mt-20 text-2xl text-center font-[500] sm:text-3xl md:text-4xl px-2">
          Expert advice,{" "}
          <span className="text-[#5f77ff]">anytime, anywhere</span>. <br />{" "}
          Consult Now!
        </h1>
        <span className="relative">
          <img
            src={contactImg}
            alt="Contact Image"
            className="w-[600px]"
            loading="lazy"
          />
          <PiCameraPlusBold className="w-8 h-8 absolute top-[20%] left-7 sm:left-16" />
          <RiMedicineBottleLine className="w-8 h-8 absolute top-[30%] right-6 sm:right-10" />
          <FaRegUser className="w-8 h-8 absolute top-[60%] right-12 sm:right-24" />
        </span>
      </div>
      <div className="my-10">
        <ContactForm />
      </div>
      <div>
        <Communication />
      </div>
      <div className="my-16">
        <Socials />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
