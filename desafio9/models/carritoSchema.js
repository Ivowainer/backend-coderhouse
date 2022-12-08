import mongoose from "mongoose";

const carritoSchema = mongoose.Schema({
    productos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Producto",
        },
    ],
});

export const Carrito = mongoose.model("Carrito", carritoSchema);
