import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized - No token found!"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Invalid token found!"
            })
        }

        req.id = decoded.id;
        next();
    } catch (error) {
        console.log("Error in verifyToken ", error);
        return res.status(500).json({ success: false, message: "Internal Server error" });
    }
}