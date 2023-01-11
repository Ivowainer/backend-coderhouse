import knexConfig from "../../db/config.js";
import { Contenedor } from "../../db/products/productsKnex.js";

export const contain1 = new Contenedor(knexConfig, "products");

export const getAllProducts = async (req, res) => {
    try {
        const getAll = await contain1.getAll();

        res.json(getAll);
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        if (!parseInt(id)) {
            return res.status(404).json({ msg: "That's not a valid ID" });
        }

        const getProduct = await contain1.getById(parseInt(id));

        if (!getProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(getProduct);
    } catch (error) {
        console.log(error);
    }
};

export const addProduct = async (req, res) => {
    try {
        const product = await contain1.save(req.body);

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (req, res) => {
    const { title, price, thumbnail } = req.body;
    const { id } = req.params;

    try {
        if (!title || !price || !thumbnail) {
            return res.json({ msg: "Please, fill all fields" });
        }

        const data = await contain1.updateById(id, { title, price, thumbnail });

        res.json(data);
    } catch (error) {
        console.log(error);
    }
};

export const deleteById = async (req, res) => {
    const { id } = req.params;

    try {
        if (!parseInt(id)) {
            return res.status(404).json({ msg: "That's not a valid ID" });
        }

        const getProduct = await contain1.deleteById(parseInt(id));

        if (!getProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(getProduct);
    } catch (error) {
        console.log(error);
    }
};

export const deleteAll = async (req, res) => {
    try {
        await contain1.deleteAll();

        res.json({ msg: "Deleted succ" });
    } catch (error) {
        console.log(error);
    }
};
