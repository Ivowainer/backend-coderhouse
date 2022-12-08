import mongoose from "mongoose";

export const connectionMongo = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce", {
            useUnifiedTopology: true,
        });

        const url = `${connection.connection.host}:${connection.connection.port} `;

        console.log("MongoDB conectado en", url);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};
