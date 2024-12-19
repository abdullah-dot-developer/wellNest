import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import { sendMail } from "../utils/sendMail.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";
import { v2 as cloudinary } from "cloudinary"
import Information from "../models/information.model.js";

export const signup = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const isEmailExist = await User.findOne({ email });
        if (isEmailExist) {
            return res.status(400).json({
                message: "An account already exist for this email!",
                success: false
            })
        }



        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format", success: false });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be of minimum 8 characters!",
                success: false
            })
        }
        // Trim email and password if needed
        email = email.trim();
        password = password.trim();

        // Hash password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(500).json({ message: "Error hashing password", success: false });
        }

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;
        if (user) {
            user.save();
            generateTokenAndSetCookie(user?._id, res)
        }
        try {
            await sendMail(email, name, "welcome");
            console.log("Email sent successfully!")
        } catch (error) {
            console.log("Error sending Email!", error);

        }

        res.status(201).json({
            message: "Signup successfully!",
            success: true,
            user: userWithoutPassword
        })
    } catch (error) {
        console.log("Error Occured in signup", error);
        res.status(500).json({ message: "Internal Server Error", succcess: false });
    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Either Email or Password is missing!", success: false });
        }


        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "Invalid Credentials!",
                success: false
            })
        }

        const isPassCorrect = await bcrypt.compare(password, user?.password);
        if (!isPassCorrect) {
            return res.status(404).json({
                message: "Invalid Credentials!",
                success: false
            })
        }


        generateTokenAndSetCookie(user?._id, res);


        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.status(200).json({
            message: "Logged In Successfully!",
            success: true,
            user: userWithoutPassword
        })
    } catch (error) {
        console.log("Error Occured in login", error);
        res.status(500).json({ message: "Internal Server Error", succcess: false });
    }
}

export const getMe = async (req, res) => {
    try {
        // console.log(req.userId)
        const user = await User.findById(req.id).select("-password");
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        console.log("Error in getMe ", error);
        res.status(400).json({ success: false, message: error.message });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({
            message: "Logged Out Successfylly!",
            success: true
        });
    } catch (error) {
        console.log("Error in logout ", error);
        res.status(400).json({ success: false, message: error.message });
    }
}


export const updateImg = async (req, res) => {
    try {
        const user = await User.findById(req.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        let { profileImg } = req.body; // New image data (base64 or URL)
        if (!profileImg) {
            return res.status(400).json({
                success: false,
                message: "No image provided",
            });
        }

        // Destroy the previous image if it exists
        if (user.profileImg) {
            // Extract public_id from the old image URL
            const publicId = user.profileImg.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(publicId);
        }

        // Upload the new image to Cloudinary
        const uploadImg = await cloudinary.uploader.upload(profileImg, {
            folder: "profile_images", // Optional: Store images in a specific folder
        });

        // Update user's profile image with the new image URL
        user.profileImg = uploadImg.secure_url;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Profile image updated successfully!",
            user,
        });
    } catch (error) {
        console.log("Error in updateImg:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const userInfo = async (req, res) => {
    try {
        const { fullName, subject, email, phoneNumber, company, city, message } = req.body;
        if (!fullName || !email || !phoneNumber || !city || !message) {
            return res.status(400).json({
                message: "All Fields are required accept subject and company!",
                success: false
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format", success: false });
        }

        const info = await Information.create({
            fullName, subject, email, phoneNumber, company, city, message
        })
        if (!info) {
            return res.status(400).json({
                message: "Sorry Your Info is not saved. Please try again!",
                success: false
            })
        }
        await info.save();
        await sendMail(email, fullName, "info-recieved", message);

        res.status(200).json({
            message: "Thank you for submitting your response!",
            success: true
        })
    } catch (error) {
        console.log("Error in logout ", error);
        res.status(400).json({ success: false, message: error.message });
    }
}