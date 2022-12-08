import express from "express";

import { deleteProductById, getAllProducts, getProductById, saveProduct, updateProductById } from "../../controllers/firebase/producto.firebase.controller.js";

const router = express.Router();

// prettier-ignore
router
    .route('/')
    .post(saveProduct)
    .get(getAllProducts)

// prettier-ignore
router
    .route('/:id')
    .get(getProductById)
    .delete(deleteProductById)
    .put(updateProductById)

export default router;
