import express, { Router } from 'express'
import dotenv from 'dotenv';
import cors from 'cors'

import productoRouter from './routes/productosRouter.js';
import carritoRouter from './routes/carritoRouter.js';

const app = express();

// Mid
app.use(express.json())
dotenv.config()
app.use(cors())

// Routing
app.use('/api/productos', productoRouter)
app.use('/api/carrito', carritoRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})

app.get('/', (req, res) => {
    res.json({
        health: 100
    })
})