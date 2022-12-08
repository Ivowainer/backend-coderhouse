import express from "express";
import dotenv from "dotenv";

// Connection
import { connectionMongo } from "./db/connect.js";

// Routes
import productosMongoRouter from "./routes/productos.mongo.router.js";
import carritoMongoRouter from "./routes/carrito.mongo.router.js";

import productoFirebaseRouter from "./routes/firebase/producto.firebase.router.js";

const app = express();

// midle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectionMongo();
dotenv.config();

// MongoRoutes
/* app.use("/api/productos", productosMongoRouter);
app.use("/api/carrito", carritoMongoRouter); */

// FirebaseRoutes
app.use("/api/productos", productoFirebaseRouter);
app.use("/api/carrito", carritoMongoRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server is running in ${PORT}`);
});
