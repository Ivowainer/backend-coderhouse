import express, { Router } from 'express'
import dotenv from 'dotenv';

import productoRouter from './routes/productosRouter.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Mid
app.use(express.json())
dotenv.config()

// Routing
app.use('/api/productos', productoRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})