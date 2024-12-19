import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import signupImg from "../assets/signup.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isLoading, error, message } = useAuthStore();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      toast.success(message || "SignUp Successfull!");
      navigate("/login");
    } catch (err) {
      toast.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-100 to-white py-4">
        <div className="w-[90%] md:w-[95%] max-w-[1050px] mx-auto md:grid md:grid-cols-2 md:shadow-md md:bg-white ">
          <div className="hidden md:block bg-blue-400">
            <div className="flex flex-col items-center justify-center py-10">
              <span className="pb-3 text-2xl md:text-3xl text-white font-[500] text-center">
                Empowering Health, Enhancing Lives
              </span>
              <img src={signupImg} alt="Login Image" />
            </div>
          </div>
          <div className="md:p-8">
            <div className="pt-9 flex flex-col items-center justify-center">
              <span className="pb-3 text-2xl md:text-3xl text-[#5F77FF] font-[500]">
                Sign Up
              </span>
              <span className="w-full h-[1px] bg-gray-300 my-6" />
              <div className="flex items-center justify-center gap-5 pb-4">
                <span className="p-2 bg-[#5F77FF] rounded-full cursor-pointer">
                  <FaFacebookF color="white" size={25} />
                </span>
                <span className="p-2 bg-red-400 rounded-full cursor-pointer">
                  <FaGoogle color="white" size={25} />
                </span>
              </div>
            </div>
            <div className="flex  items-center justify-center">
              <span className="w-full  h-[1px] bg-gray-300"></span>
              <p className="px-2 text-sm text-gray-600">Or</p>
              <span className="w-full h-[1px] bg-gray-300" />
            </div>
            <form onSubmit={handleSubmit} className="py-6">
              <div className=" flex gap-5 flex-col items-center justify-center">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="p-3 border border-gray-300 bg-gray-50 w-full hover:outline-[#5F77FF] text-lg"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="p-3 border border-gray-300 bg-gray-50 w-full hover:outline-[#5F77FF] text-lg"
                />
                <span className="relative w-full">
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="p-3 border border-gray-300 bg-gray-50 w-full hover:outline-[#5F77FF] text-lg"
                  />
                  {show ? (
                    <LiaEyeSolid
                      size={25}
                      onClick={() => setShow(!show)}
                      className="absolute right-2 top-[25%] text-gray-400"
                    />
                  ) : (
                    <LiaEyeSlashSolid
                      size={25}
                      onClick={() => setShow(!show)}
                      className="absolute right-2 top-[25%] text-gray-400"
                    />
                  )}
                </span>
              </div>
              <div className="py-6 flex flex-col items-end justify-end gap-2">
                <button
                  type="submit"
                  className={`px-5 py-2 bg-[#5F77FF] text-white rounded-xl cursor-pointer ${
                    isLoading && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <span className="text-center flex items-center justify-center">
              Already have an account?{" "}
              <span
                className="text-[#5F77FF] cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
