import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

import dotenv from "dotenv";

import { connection } from "./db/mongoConnection.js";

import messageRouter from "./routes/chat/message.routes.js";
import authorRouter from "./routes/chat/author.routes.js";
import productRouter from "./routes/product/product.routes.js";
import productsTestRouter from "./routes/product/product-test.routes.js";

import { mongoChat } from "./controller/chat/message.controller.js";
import { desnormalizrMessage } from "./utils/normalizrMessages.js";
import { mongoProducts } from "./controller/product/productController.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

/*============================ MID ============================*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
connection();

const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
    console.log(`The server is running in ${PORT}`);
});

/*============================ ROUTES ============================*/
app.use("/api/messages", messageRouter);
app.use("/api/authors", authorRouter);
app.use("/api/products", productRouter);
app.use("/api/products-test", productsTestRouter);

/*============================ VIEW ============================*/
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async (req, res) => {
    res.render("index");
});

/*============================ SOCKETS ============================*/
io.on("connection", async (socket) => {
    /* Chat */

    socket.emit("UPDATE_MESSAGES", async () => {
        const messages = await mongoChat.getAllMessages();

        console.log(desnormalizrMessage(messages));
    });
    /* socket.emit("UPDATE_MESSAGES", await mongoChat.getAllMessages()); */

    socket.on("MESSAGE_SERVER", async (data) => {
        const messages = await mongoChat.getAllMessages();

        await mongoChat.sendMessage(data);

        await messages.push(data);

        io.emit("UPDATE_MESSAGES", messages);
    });

    /* Products */
    socket.emit("UPDATE_PRODUCTS", await mongoProducts.getAllProducts());

    socket.on("PRODUCT_SERVER", async (data) => {
        await mongoProducts.postProduct(data);

        io.emit("UPDATE_PRODUCTS", await mongoProducts.getAllProducts());
    });
});
