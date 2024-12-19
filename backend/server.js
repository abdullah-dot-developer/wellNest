import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";


dotenv.config();

const app = express();

app.use(cors({
    origin: "https://well-nest-beta.vercel.app",
    credentials: true,
}));
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
    connectDB();
})