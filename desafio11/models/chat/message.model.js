import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true,
    },
    text: { type: String, required: true },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
