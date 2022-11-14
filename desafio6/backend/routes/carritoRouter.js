import express from "express";

import { createCart, createProductInCart, deleteCart, deleteProductByCart, getProductsByCart } from "../controller/carritoController.js";

const router = express.Router()

router
    .route('/')
    .post(createCart)

router
    .route('/:id')
    .delete(deleteCart)

router
    .route('/:idCart/productos')
    .post(createProductInCart)
    .get(getProductsByCart)

router.delete('/:idCart/productos/:idProduct', deleteProductByCart)

export default router