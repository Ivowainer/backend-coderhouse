import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import { cookieSession } from "./middleware/cookieSession.js";

import { connection } from "./db/mongoConnection.js";

import messageRouter from "./routes/chat/message.routes.js";
import authorRouter from "./routes/chat/author.routes.js";
import productRouter from "./routes/product/product.routes.js";
import productsTestRouter from "./routes/product/product-test.routes.js";
import userRouter from "./routes/user/user.routes.js";

import { mongoChat } from "./controller/chat/message.controller.js";
import { desnormalizrMessage } from "./utils/normalizrMessages.js";
import { mongoProducts } from "./controller/product/productController.js";
import { checkAuth } from "./middleware/checkAuth.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

/*============================ MID ============================*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const COOKIES_SECRET = process.env.COOKIES_SECRET || "123456";
app.use(cookieParser());
dotenv.config();
connection();

const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
    console.log(`The server is running in ${PORT}`);
});

/*============================ SESSION MONGO ============================*/
const storeConfig = {
    mongoUrl: process.env.MONGO_URI,
    mongoOption: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

app.use(
    session({
        store: MongoStore.create(storeConfig),
        secret: COOKIES_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);

app.post("/api/session", (req, res) => {
    req.session.user = req.body.user;

    res.json({ status: "succesful" });
});

app.delete("/api/session", (req, res) => {
    req.session.destroy();

    res.json({ status: "successful" });
});

/*============================ ROUTES ============================*/
app.use("/api/messages", messageRouter);
app.use("/api/authors", authorRouter);
app.use("/api/products", productRouter);
app.use("/api/products-test", productsTestRouter);
app.use("/api/users", userRouter);

/*============================ VIEWS ============================*/
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async (req, res) => {
    res.render("index");
});

app.get("/login", async (req, res) => {
    res.render("login");
});
app.get("/dashboard", checkAuth, cookieSession, async (req, res) => {
    res.render("dashboard", { user: req.user });
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
