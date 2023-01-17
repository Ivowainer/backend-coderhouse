import jwt from "jsonwebtoken";

import { User } from "../models/User.js";

export const checkAuth = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Invalid Authorization" });
    }

    const cleanToken = token.slice(7, token.length);

    try {
        const decoded = jwt.verify(cleanToken, process.env.JWT_KEY || "123456");

        req.user = await User.findById({ _id: decoded.userId }).select("-password -_id -__v");

        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid token" });
    }
};
