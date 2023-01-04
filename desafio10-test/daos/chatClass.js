import { normalizrMessages } from "../utils/normalizrMessages.js";

export class ChatClass {
    constructor(model) {
        this.model = model;
    }

    async getAllMessages() {
        const messages = await this.model.find().populate("author");

        /* res.json(await JSON.parse(JSON.stringify(messages))); */

        return normalizrMessages(await JSON.parse(JSON.stringify(messages)));
    }

    async sendMessage({ author, text }) {
        try {
            const newMessage = await this.model.create({ author, text });

            await newMessage.save();

            return newMessage;
        } catch (error) {
            console.log(error);
        }
    }
}
