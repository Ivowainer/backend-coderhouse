import mongoose from "mongoose";

export const connection = async () => {
    await mongoose.set("strictQuery", false);
    const mongoConnection = await mongoose.connect(process.env.MONGO_URI);

    console.log("Mongo connected");
};
