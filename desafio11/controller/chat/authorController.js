import { faker } from "@faker-js/faker";
import Author from "../../models/chat/authorModel.js";

export const createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create({
            email: faker.internet.email(),
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
