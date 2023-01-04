import { schema, normalize, denormalize } from "normalizr";

import { ContenedorMessage } from "../../db/products/productsKnex.js";

import Message from "../../models/message.model.js";

const authorSchema = new schema.Entity("authors");

const textSchema = new schema.Entity("text", {
    author: authorSchema,
});

const textsSchema = new schema.Array(textSchema);

const classMessage = new ContenedorMessage(Message);

export const getAllMessages = async (req, res) => {
    /* res.json(classMessage.getMessages()); */

    const message = await classMessage.getMessages();

    res.json(normalize(message, textsSchema));
};

export const sendMessage = async (req, res) => {
    res.json(await classMessage.saveMessage(req.body));
};
