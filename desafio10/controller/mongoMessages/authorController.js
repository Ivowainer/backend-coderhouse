import { faker } from "@faker-js/faker";
import Author from "../../models/authorModel.js";

export const createAuthor = async (req, res) => {
    const { id } = req.body;

    try {
        const newAuthor = await Author.create({
            id,
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            edad: faker.random.numeric(),
            alias: faker.internet.userName(),
            avatar: faker.internet.avatar(),
        });

        const author = await newAuthor.save();

        res.json(author);
    } catch (error) {
        console.log(error);
    }
};
