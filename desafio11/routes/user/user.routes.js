import express from "express";
import { checkAuth } from "../../middleware/checkAuth.js";

import { loginUser, registerUser } from "../../controller/user/userController.js";

const router = express.Router();

router.post("/", loginUser);
router.post("/register", registerUser);

export default router;
