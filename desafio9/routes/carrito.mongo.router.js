import express from "express";
import { createCart, deleteCartById, deleteProductInCartById, getAllCarts, getCartById, uploadProductInCart } from "../controllers/carrito.mongo.controller.js";

const router = express.Router();

// prettier-ignore
router
    .route('/')
    .post(createCart)
    .get(getAllCarts)

// prettier-ignore
router
    .route('/:id')
    .post(uploadProductInCart)
    .get(getCartById)
    .delete(deleteCartById)

router.delete("/:idCart/product/:idProduct", deleteProductInCartById);

export default router;
