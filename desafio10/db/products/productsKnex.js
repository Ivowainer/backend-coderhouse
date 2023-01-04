import config from "../config.js";
import fs from "fs";
import knexDb from "knex";

import Message from "../../models/message.model.js";
import Author from "../../models/authorModel.js";

export class Contenedor {
    constructor(databaseConfig, tableName) {
        this.databaseConfig = databaseConfig;
        this.tableName = tableName;
    }

    async save(object) {
        const knex = knexDb(this.databaseConfig);

        try {
            const product = await knex(this.tableName).insert(object);

            await knex.destroy();

            return product;
        } catch (error) {}
    }

    async getById(number) {
        const knex = knexDb(this.databaseConfig);

        try {
            const data = await knex(this.tableName).where("id", "=", number).select("*");
            if (data.length == 0) {
                return "Product not found";
            }

            await knex.destroy();

            return JSON.parse(JSON.stringify(data[0]));
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAll() {
        const knex = knexDb(this.databaseConfig);

        try {
            const data = await knex.select().table(this.tableName);

            await knex.destroy();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(number) {
        const knex = knexDb(this.databaseConfig);

        try {
            const data = await knex(this.tableName).where("id", "=", number).del();

            if (data.length == 0) {
                return "Product not found";
            }

            await knex.destroy();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        const knex = knexDb(this.databaseConfig);

        try {
            const data = await knex(this.tableName).del();

            await knex.destroy();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateById(id, newProduct) {
        const { title, price, thumbnail } = newProduct;

        const knex = knexDb(this.databaseConfig);

        try {
            const data = await knex(this.tableName).where("id", "=", id).update({ title: title, price: price, thumbnail: thumbnail });

            if (data == 0) {
                return "Product not found";
            }

            await knex.destroy();

            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export class ContenedorMessage {
    constructor(schema) {
        this.schema = schema;
    }

    async getMessages() {
        try {
            const messages = await Message.find().populate("author");

            return messages;
        } catch (error) {
            console.log(error);
        }
    }

    async saveMessage(data) {
        try {
            const newMessage = await Message.create(data);

            await newMessage.save();

            return newMessage;
        } catch (error) {
            console.log(error);
        }
    }
}
