import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";

import productoRouter from "./routes/productosRouter.js";
import testProductoRouter from "./routes/testProducto.Router.js";
import messageRoute from "./routes/mongoRoutes/message.routes.js";
import authorRouter from "./routes/mongoRoutes/author.routes.js";

import knexConfig from "./db/config.js";
import { connection } from "./db/mongoConnection.js";
import { Contenedor, ContenedorMessage } from "./db/products/productsKnex.js";

import { appSetPug } from "./utils/appSetPug.js";
import { appSetEJS } from "./utils/appSetEJS.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const contain1 = new Contenedor(knexConfig, "products");
const containMessage = new ContenedorMessage(knexConfig, "messages");

// Mid
connection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// Plantilla
app.set("view engine", "ejs");
app.set("views", "./views/ejs");

// Routing
app.use("/api/productos", productoRouter);
app.use("/api/productos-test", testProductoRouter);

app.use("/api/messages", messageRoute);
app.use("/api/authors", authorRouter);

const PORT = process.env.PORT || 8080;

// Serve
httpServer.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
});

app.get("/", async (req, res) => {
    const products = await contain1.getAll();

    res.render("index", { products });
});

// Sockets

io.on("connection", async (socket) => {
    /* Chat */
    socket.emit("UPDATE_MESSAGES", await containMessage.getMessages());
    /* console.log(await containMessage.getMessages()); */

    socket.on("MESSAGE_SERVER", async (data) => {
        const messages = await containMessage.getMessages();

        containMessage.saveMessage(data);

        messages.push(data);

        io.emit("UPDATE_MESSAGES", messages);
    });

    /* Products */
    socket.emit("UPDATE_PRODUCTS", await contain1.getAll());

    socket.on("PRODUCT_SERVER", async (data) => {
        await contain1.save(data);

        io.emit("UPDATE_PRODUCTS", await contain1.getAll());
    });
});

// Connect DB Mongo
// Schema messages: Author: Ref AuthorSchema, Content
// Schema author: Name, Apellido, Edad, Alias, Avatar, Email; messsages: []
