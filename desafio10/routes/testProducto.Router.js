import express from "express";
import { createRandomProducts } from "../controller/testProductoController.js";

const router = express.Router();

//prettier-ignore
router
    .route('/')
    .get(createRandomProducts)

export default router;
