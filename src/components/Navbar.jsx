import React, { useState } from "react";
import logo from "../assets/3.svg";
import { RiMenu4Line, RiSearchLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoLogInOutline } from "react-icons/io5";

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
  // const [isVisible, setIsVisible] = useState(true); // Navbar visibility
  // const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  // const [authForm, setAuthForm] = useState(false);

  const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       // Scrolling down
  //       setIsVisible(false);
  //     } else {
  //       // Scrolling up
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup listener on unmount
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  const navigate = useNavigate();

  return (
    <>
      {open && (
        <div className="">
          <div className="flex items-center justify-center gap-2 absolute top-24 right-10 bg-gray-100 transform ease-in-out z-30">
            <input
              type="text"
              placeholder="Enter a query..."
              className="bg-white border-b rounded-xl px-3 py-2 focus:outline-none"
            />
            <div className="flex items-center gap-0">
              <span className="cursor-pointer bg-[#5F77FF] hover:bg-[#7287ff] px-3 py-2 ">
                <RiSearchLine />
              </span>
              <span
                onClick={() => setOpen(false)}
                className="cursor-pointer bg-red-600 hover:bg-red-500 px-3 py-2 "
              >
                <RxCross2 className="text-white" />
              </span>
            </div>
          </div>
        </div>
      )}

      <nav>
        <div
          className={`flex items-center bg-white justify-between w-full px-6 md:px-16 pt-6 mx-auto `}
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
              <span onClick={() => setOpen(!open)}>
                <RiSearchLine
                  size={40}
                  className="rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 px-2 py-2 text-[#5F77FF]"
                />
              </span>
              <span>
                <RiMenu4Line
                  size={40}
                  className="rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 px-2 py-2 text-[#5F77FF] lg:hidden"
                />
              </span>
              <span>
                <IoLogInOutline
                  size={40}
                  className="hidden lg:block rounded-full cursor-pointer bg-gray-100 hover:bg-[rgb(95,119,255)] px-2 py-2 text-[#5F77FF] hover:text-gray-100"
                  onClick={() => navigate("/login")}
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
