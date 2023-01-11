import Product from "../../models/products/productModel.js";

import { ProductClass } from "../../daos/productClass.js";

export const mongoProducts = new ProductClass(Product);

export const getAllProducts = async (req, res) => {
    res.json(await mongoProducts.getAllProducts());
};

export const postProduct = async (req, res) => {
    res.json(await mongoProducts.postProduct(req.body));
};
