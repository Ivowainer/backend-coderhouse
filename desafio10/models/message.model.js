import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
    },
    text: { type: String },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
