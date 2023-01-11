import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: { type: String },
    price: { type: String },
    thumbnail: { type: String },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
