import Message from "../../models/chat/message.model.js";
import { normalizrMessages } from "../../utils/normalizrMessages.js";

export const getAllMessages = async (req, res) => {
    const messages = await Message.find().populate("author");

    /* res.json(await JSON.parse(JSON.stringify(messages))); */

    res.json(normalizrMessages(await JSON.parse(JSON.stringify(messages))));
};

export const sendMessage = async (req, res) => {
    const { author, text } = req.body;

    try {
        const newMessage = await Message.create({ author, text });

        await newMessage.save();

        res.json(newMessage);
    } catch (error) {
        console.log(error);
    }
};
