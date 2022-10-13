import express from "express";
const app = express()

import { getAll1 } from "./fileManager.js";

const PORT = 8080;
app.listen(PORT, async () => {
    console.log(`servidor corriendo en ${PORT}`)
})

app.get('/productos', async (req, res) => {
    try {
        const getAll = await getAll1

        res.status(200).json(getAll)
    } catch (error) {
        console.log(error)
    }
})

app.get('/productoRandom', async (req, res) => {
    try {
        const getAll = await getAll1

        const randomProduct = await getAll[Math.floor(Math.random() * getAll.length)]

        res.status(200).json(randomProduct)

    } catch (error) {
        console.log(error)
    }
})