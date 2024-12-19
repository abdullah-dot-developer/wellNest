import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../node_modules/flag-icon-css/css/flag-icons.min.css";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const { postInfo, error, message: messageR, isLoading } = useAuthStore();
  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postInfo(
        fullName,
        subject,
        email,
        phoneNumber,
        company,
        city,
        message
      );
      toast.success(messageR || "Info Recieved!");
      setFullName("");
      setSubject("");
      setEmail("");
      setPhoneNumber("");
      setCompany("");
      setCity("");
      setMessage("");
    } catch (err) {
      console.log(err);
      toast.error(error || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-[88%] lg:w-[85%] mx-auto"
    >
      <span className="text-[#5d75ff] text-sm font-[500]">GET IN TOUCH</span>
      <span className="text-2xl md:text-4xl font-[500]">
        Got Any Questions?
      </span>
      <div className="w-full items-center justify-center my-10">
        <div className="sm:grid sm:grid-cols-2 gap-5 ">
          <div className="flex flex-col gap-1  mb-5">
            <label className="font-[500]">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Name"
              className="px-2 py-3 bg-gray-100 border-b-2 border-gray-300 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label className="font-[500]">Subject/Query</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What do you got in your mind?"
              className="px-2 py-3 bg-gray-100 border-b-2 border-gray-300 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label className="font-[500]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email address"
              className="px-2 py-3 bg-gray-100 border-b-2 border-gray-300 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label className="font-[500]">Phone Number</label>
            <PhoneInput
              country={"pk"} // Default country
              value={phoneNumber}
              placeholder="Enter Phone Number"
              onChange={(value) => handlePhoneChange(value)}
              inputStyle={{
                width: "100%",
                height: "50px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "16px",
                paddingLeft: "60px", // Adjust for the flag
                backgroundColor: "#f3f4f6",
                font: "16px",
                color: "#4b5563",
              }}
              containerStyle={{
                width: "100%",
              }}
              buttonStyle={{
                backgroundColor: "#f3f4f6",
                border: "none",
              }}
              dropdownStyle={{
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label className="font-[500]">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your Company's name"
              className="px-2 py-3 bg-gray-100 border-b-2 border-gray-300 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label className="font-[500]">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Your City's name"
              className="px-2 py-3 bg-gray-100 border-b-2 border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label className="font-[500]">Message</label>
          <textarea
            rows={8}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="w-full px-2 py-3 bg-gray-100 border-b-2 border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`px-5 py-2 bg-[#5F77FF] text-white rounded-full sm:px-12 lg:px-20 ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
          >
            Send Your Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
