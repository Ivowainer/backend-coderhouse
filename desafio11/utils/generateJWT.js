import jwt from "jsonwebtoken";

export const generateJWT = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_KEY || "1234567", { expiresIn: "30d" });
};
