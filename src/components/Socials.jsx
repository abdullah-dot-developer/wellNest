import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: <FaTiktok />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: <FaYoutube />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
  },
];

const Socials = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <span className="text-2xl font-[500] md:text-3xl lg:text-4xl">
        Socials
      </span>
      <div className="flex flex-wrap items-center text-center justify-center  gap-6 md:gap-10 lg:gap-20 px-2">
        {socialLinks.map((link) => (
          <Link
            to={link.href}
            target="_blank"
            key={link.name}
            className="flex flex-col gap-2"
          >
            <span className="text-2xl lg:text-3xl text-white bg-gradient-to-b from-[#6378fc] to-[#7a80ed] p-7 rounded-full w-full text-center">
              {link.icon}
            </span>
            <div className="text-sm md:text-lg font-[500]">{link.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
