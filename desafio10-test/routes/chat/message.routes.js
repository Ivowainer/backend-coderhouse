import express from "express";

import { getAllMessages, sendMessage } from "../../controller/chat/message.controller.js";

const router = express.Router();

router.get("/", getAllMessages);
router.post("/", sendMessage);

export default router;
