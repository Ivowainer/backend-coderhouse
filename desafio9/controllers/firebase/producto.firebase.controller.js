import { Contenedor } from "../../daos/productFirebaseManager.js";

const firebaseContain = new Contenedor("productos");

export const saveProduct = async (req, res) => {
    const { title, description, thumbnail, price, stock } = req.body;

    if ([title, description, thumbnail, price].includes("")) {
        return res.status(202).json({ msg: "Por favor, rellena todos los campos" });
    }

    try {
        const newProduct = await firebaseContain.save({ title, description, thumbnail, price, stock: 0 });

        res.json(newProduct);
    } catch (error) {
        console.log(error);
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await firebaseContain.getById(id);

        res.json(product._document.data.value.mapValue.fields);
    } catch (error) {
        console.log(error);
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await firebaseContain.getAll();

        res.json({ products });
    } catch (error) {
        console.log(error);
    }
};

export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const productDeleted = await firebaseContain.deleteById(id);

        res.json(productDeleted);
    } catch (error) {
        console.log(error);
    }
};

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { title, description, thumbnail, price, stock } = req.body;

    try {
        const productUpdated = await firebaseContain.updateById(id, { title, description, thumbnail, price, stock });

        res.json(productUpdated);
    } catch (error) {
        console.log(error);
    }
};
