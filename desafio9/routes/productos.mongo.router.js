import express from "express";

import { deleteById, getAllProducts, getProduct, updateById, uploadProduct } from "../controllers/productos.mongo.controller.js";

const router = express.Router();

// prettier-ignore
router
    .route('/')
    .get(getAllProducts)
    .post(uploadProduct);

// prettier-ignore
router
    .route("/:id")
    .get(getProduct)
    .delete(deleteById)
    .put(updateById)

export default router;
