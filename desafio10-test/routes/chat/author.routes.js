import express from "express";
const router = express.Router();

import { createAuthor } from "../../controller/chat/authorController.js";

router.post("/", createAuthor);

export default router;
