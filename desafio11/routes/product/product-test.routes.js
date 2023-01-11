import express from "express";

import { createTestProduct } from "../../controller/product/productTestController.js";

const router = express.Router();

router.get("/", createTestProduct);

export default router;
