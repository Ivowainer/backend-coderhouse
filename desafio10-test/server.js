import express from "express";
import dotenv from "dotenv";
import { connection } from "./db/mongoConnection.js";

import messageRouter from "./routes/chat/message.routes.js";
import authorRouter from "./routes/chat/author.routes.js";

import { sendMessage } from "./controller/chat/message.controller.js";

const app = express();

/*============================ MID ============================*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
connection();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server is running in ${PORT}`);
});

/*============================ ROUTES ============================*/
app.use("/api/messages", messageRouter);
app.use("/api/authors", authorRouter);

/*============================ VIEW ============================*/
