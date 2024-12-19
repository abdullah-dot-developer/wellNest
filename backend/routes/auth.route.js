import express from "express";
import { getMe, login, logout, signup, updateImg, userInfo } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/login", login);
router.get("/me", verifyToken, getMe);
router.get("/logout", logout);
router.put("/update-img", verifyToken, updateImg);
router.post("/share-info", userInfo);

export default router;