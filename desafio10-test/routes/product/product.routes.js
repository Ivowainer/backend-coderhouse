import express from "express";

import { getAllProducts, postProduct } from "../../controller/product/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", postProduct);

export default router;
