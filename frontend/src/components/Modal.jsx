import React, { useEffect, useRef, useState } from "react";
import { GrCloudUpload } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const [image, setImage] = useState(""); // Local state to preview the image
  const { logout, updateProfileImage, user, message, error } = useAuthStore();
  const navigate = useNavigate();

  const imgRef = useRef(null); // Hidden file input
  const modalRef = useRef(null); // For closing the modal on outside click

  const triggerFileInput = () => {
    imgRef.current.click(); // Trigger the hidden file input
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // Get the file
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        setImage(reader.result); // Preview the image

        try {
          await updateProfileImage(reader.result); // Call API to upload
          toast.success("Profile Image Updated!");
          closeModal(); // Close modal after success
        } catch (err) {
          toast.error("Failed to update profile image");
        }
      };
      reader.readAsDataURL(file); // Convert to base64 for sending
    }
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal(); // Close modal if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout Successfull!");
      closeModal();
      navigate("/");
    } catch (err) {
      toast.error(error || "Failed to logout");
    }
  };

  return (
    <div
      className="fixed top-[21rem] lg:top-[4.8rem] left-48 sm:left-96 md:right-64 lg:right-16  flex z-[999] justify-end items-end"
      ref={modalRef}
    >
      <div className="relative rounded-lg bg-gray-700 py-2">
        {/* Upload Section */}
        <div
          className="flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-600 px-6 py-2"
          onClick={triggerFileInput}
        >
          <span>
            <GrCloudUpload color="white" />
          </span>
          <span className="text-white">Upload</span>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={imgRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />

        {/* Show Image Preview */}
        {image && (
          <div className="p-4 text-center">
            <img
              src={image}
              alt="Preview"
              className="w-16 h-16 rounded-full mx-auto"
            />
          </div>
        )}

        {/* Logout Section */}
        <div
          onClick={handleLogout}
          className="flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-600 px-6 py-2"
        >
          <span>
            <TbLogout2 color="white" />
          </span>
          <span className="text-white">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
