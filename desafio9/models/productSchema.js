import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        thumbnail: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
);

export const Producto = mongoose.model("Producto", productSchema);
