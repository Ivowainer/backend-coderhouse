export class ProductClass {
    constructor(model) {
        this.model = model;
    }

    async getAllProducts() {
        const messages = await this.model.find();

        return await JSON.parse(JSON.stringify(messages));
    }

    async postProduct({ title, price, thumbnail }) {
        try {
            const newMessage = await this.model.create({ title, price, thumbnail });

            await newMessage.save();

            return newMessage;
        } catch (error) {
            console.log(error);
        }
    }
}
