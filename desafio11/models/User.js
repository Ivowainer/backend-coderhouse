import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, 10);
    }

    next();
});

userSchema.methods.comparePassword = async function (passwordForm) {
    return await bcrypt.compare(passwordForm, this.password);
};

export const User = mongoose.model("User", userSchema);
