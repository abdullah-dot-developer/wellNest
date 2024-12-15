import React, { useEffect, useState } from "react";
import logo from "../assets/3.svg";
import { RiMenu4Line, RiSearchLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Services",
    href: "/services",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav>
      <div
        className={`flex items-center bg-white justify-between w-full px-6 md:px-16 pt-6 mx-auto ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center gap-24">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer gap-1">
              <span>
                <img src={logo} alt="Logo" className="w-6 h-6 text-black" />
              </span>
              <span className="text-2xl font-light">
                Well<b>Nest</b>
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  key={link.title}
                  className={`px-4 hover:text-[#5F77FF] cursor-pointer text-[1rem] ${
                    location.pathname === link.href &&
                    "text-[#5F77FF] font-semibold"
                  }`}
                  onClick={() => setActiveLink(link.title)}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <div>
            <button className="hidden sm:block px-5 py-2 bg-[#5F77FF] text-sm md:text-lg text-white rounded-full">
              Download App
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span>
              <RiSearchLine
                size={40}
                className="rounded-full cursor-pointer bg-gray-100 px-2 py-2 text-[#5F77FF]"
              />
            </span>
            <span>
              <RiMenu4Line
                size={40}
                className="rounded-full cursor-pointer bg-gray-100 px-2 py-2 text-[#5F77FF]"
              />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
