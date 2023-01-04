import Message from "../../models/chat/message.model.js";

import { ChatClass } from "../../daos/chatClass.js";

export const mongoChat = new ChatClass(Message);

export const getAllMessages = async (req, res) => {
    /* res.json(await JSON.parse(JSON.stringify(messages))); */
    /* res.json(normalizrMessages(await JSON.parse(JSON.stringify(messages)))); */

    res.json(await mongoChat.getAllMessages());
};

export const sendMessage = async (req, res) => {
    const { author, text } = req.body;

    try {
        res.json(await mongoChat.sendMessage(req.body));
    } catch (error) {
        console.log(error);
    }
};
