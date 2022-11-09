import express from "express";

import { addProduct, deleteById, getAllProducts, getProduct, updateProduct } from "../controller/productoController.js";

const router = express.Router()

router
    .route('/')
    .get(getAllProducts)
    .post(addProduct)

router
    .route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteById)
    
export default router;