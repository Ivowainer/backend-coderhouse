import { ContenedorCarrito } from "../daos/productMongo.js";
import { Carrito } from "../models/carritoSchema.js";
import { Producto } from "../models/productSchema.js";

const cartContainer = new ContenedorCarrito(Carrito, Producto);

export const createCart = async (req, res) => {
    try {
        const newCart = cartContainer.save();

        res.status(200).json(newCart);
    } catch (error) {
        console.log(error);
    }
};

export const getAllCarts = async (req, res) => {
    try {
        res.status(200).json(await cartContainer.getAllCarts());
    } catch (error) {
        console.log(error);
    }
};

export const uploadProductInCart = async (req, res) => {
    const { idProduct } = req.body;
    const { id } = req.params;

    try {
        const productInCart = await cartContainer.uploadProductInCart(idProduct, id);

        res.json(productInCart);
    } catch (error) {
        console.log(error);
    }
};

export const getCartById = async (req, res) => {
    const { id } = req.params;

    try {
        const cart = await cartContainer.getCartById(id);

        res.json(cart);
    } catch (error) {
        console.log(error);
    }
};

export const deleteCartById = async (req, res) => {
    const { id } = req.params;

    try {
        const cart = await cartContainer.deleteCartById(id);

        res.json(cart);
    } catch (error) {
        console.log(error);
    }
};

export const deleteProductInCartById = async (req, res) => {
    const { idCart, idProduct } = req.params;

    try {
        const productDeleted = await cartContainer.deleteProductInCartById(idCart, idProduct);

        res.json(productDeleted);
    } catch (error) {
        console.log(error);
    }
};
