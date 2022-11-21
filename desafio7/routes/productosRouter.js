import express from "express";

import { addProduct, deleteAll, deleteById, getAllProducts, getProduct, updateProduct } from "../controller/productoController.js";

const router = express.Router()

router
    .route('/')
    .get(getAllProducts)
    .post(addProduct)
    .delete(deleteAll)

router
    .route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteById)
    
export default router;