import Product from "../../models/products/productModel.js";

import { ProductClass } from "../../daos/productClass.js";

import { faker } from "@faker-js/faker";

export const mongoTestProducts = new ProductClass(Product);

export const createTestProduct = (req, res) => {
    const arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push({
            title: faker.commerce.product(),
            price: faker.finance.amount(),
            thumbnail: faker.image.avatar(),
        });
    }

    res.json(arr);
};
