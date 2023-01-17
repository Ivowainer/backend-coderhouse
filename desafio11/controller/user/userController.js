import { User } from "../../models/User.js";
import { generateJWT } from "../../utils/generateJWT.js";

/* register user */
export const registerUser = async (req, res) => {
    const { email, name, password } = req.body;

    if (!name || !email || !password) {
        return res.status(404).json({ msg: "Please, fill all the fields" });
    }

    try {
        const newUser = new User({
            email,
            name,
            password,
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({ msg: "Something is wrong with registerUser Controller" });
    }
};

/* login user */
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "The user doesn't exists" });
        }

        if (await user?.comparePassword(password)) {
            res.status(202).json({
                email: user?.email,
                name: user?.name,
                token: generateJWT(user?._id),
            });
        } else {
            res.status(401).json({ msg: "The user credentials are incorrect" });
        }
    } catch (error) {
        res.status(404).json({ msg: "Something is wrong with loginUser Controller" });
    }
};
