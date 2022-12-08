import { Contenedor } from "../daos/productMongo.js";
import { Producto } from "../models/productSchema.js";

const productContainer = new Contenedor(Producto);

export const uploadProduct = async (req, res) => {
    const { title, description, thumbnail, price, stock } = req.body;

    if ([title, description, thumbnail, price].includes("")) {
        return res.status(202).json({ msg: "Por favor, rellena todos los campos" });
    }

    try {
        const newProduct = await productContainer.save({ title, description, thumbnail, price, stock });

        res.json({ newProduct });
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await productContainer.getById(id);

        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await productContainer.getAll();

        res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
};

export const deleteById = async (req, res) => {
    const { id } = req.params;

    try {
        const productDeleted = await productContainer.deleteById(id);

        res.status(200).json({ productDeleted });
    } catch (error) {
        console.log(error);
    }
};

export const updateById = async (req, res) => {
    const { title, description, stock, thumbnail, price } = req.body;
    const { id } = req.params;

    try {
        const productUpdated = await productContainer.updateById(id, { title, description, stock, thumbnail, price });

        res.status(200).json(productUpdated);
    } catch (error) {
        console.log(error);
    }
};
