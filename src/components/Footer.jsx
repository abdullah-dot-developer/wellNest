import React from "react";
import logo from "../assets/3.svg";
import appleStore from "../assets/AppStore1.png";
import playStore from "../assets/playStore1.webp";
import appleGallery from "../assets/appGallery.jpeg";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaArrowUpLong } from "react-icons/fa6";

const imgLink = [
  {
    link: appleStore,
    alt: "Apple Store",
  },
  {
    link: playStore,
    alt: "Play Store",
  },
  {
    link: appleGallery,
    alt: "Apple Gallery",
  },
];

const quickLinks = ["Home", "About Us", "Our Services", "Contact Us"];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <>
      <footer className="bg-[#262b41] relative">
        <div className="w-[94%] mx-auto">
          <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-[1fr,0.5fr,0.5fr,0.5fr,0.5fr] p-8 sm:p-1  border-b-2 border-gray-400">
            <div className="flex items-start sm:justify-start flex-col gap-4 mt-12">
              <div className="flex items-center cursor-pointer gap-1">
                <span className="text-white">
                  <img src={logo} alt="Logo" className="w-10 h-10" />
                </span>
                <span className="text-3xl font-light text-white">
                  Well<b>Nest</b>
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Your health, your way! Smarter care is just a tap away.
              </p>
            </div>
            <div className="text-left my-6 sm:mt-12 text-gray-200">
              <p className="text-lg">QUICK LINKS</p>
              <ul className="py-2">
                {quickLinks.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer hover:underline py-2"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left my-6 lg:my-12  text-gray-200">
              <p className="text-lg">DOWNLOAD APP</p>
              <ul className="py-2">
                {imgLink.map((img) => (
                  <li key={img.alt} className="cursor-pointer py-2">
                    <img src={img.link} alt={img.alt} className="w-[100px]" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left my-6 lg:my-12 text-gray-200">
              <p className="text-lg">SOCIALS</p>
              <div className="flex gap-2 py-2 cursor-pointer">
                <span className="p-2 border-2 rounded-md">
                  <TiSocialFacebook />
                </span>
                <span className="p-2 border-2 rounded-md">
                  <TiSocialTwitter />
                </span>
                <span className="p-2 border-2 rounded-md">
                  <TiSocialLinkedin />
                </span>
                <span className="p-2 border-2 rounded-md">
                  <TiSocialYoutube />
                </span>
              </div>
            </div>
            <div className="text-left my-6 lg:my-12 text-gray-200">
              <p className="text-lg">LOCATION</p>
              <div className="flex gap-2 py-2 text-1rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between py-3 text-white">
            <p>© Ideation, 2024. All Rights Reserved</p>
            <div className="flex gap-8 cursor-pointer">
              <p className="hover:underline">Privacy Policy</p>
              <p className="hover:underline">Terms & Services</p>
            </div>
          </div>
        </div>
        <div className="absolute -top-6 right-6 lg:right-16 ">
          <div
            onClick={scrollToTop}
            className="bg-gray-50 rounded-full p-3 text-[#5f77ff] shadow-sm shadow-gray-500 cursor-pointer"
          >
            <FaArrowUpLong size={20} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
