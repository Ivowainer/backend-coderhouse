import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    id: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    edad: { type: String },
    alias: { type: String },
    avatar: { type: String },
});

const Author = mongoose.model("Author", authorSchema);
export default Author;
