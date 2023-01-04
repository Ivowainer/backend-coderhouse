import express from "express";
const router = express.Router();

import { createAuthor } from "../../controller/mongoMessages/authorController.js";

router.post("/", createAuthor);

export default router;
