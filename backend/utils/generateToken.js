import jwt from "jsonwebtoken"
export const generateTokenAndSetCookie = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "21d"
    })
    res.cookie("jwt", token, {
        maxAge: 21 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: true
    })
}