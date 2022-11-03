import express, { urlencoded } from 'express'
import dotenv from 'dotenv';

import productoRouter from './routes/productosRouter.js';
import { contain1 } from './fileManager.js';

import { getAllProducts } from './controller/productoController.js';

import { appSetPug } from './utils/appSetPug.js';
import { appSetEJS } from './utils/appSetEJS.js';

const app = express();

// Mid
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config()

// Plantilla
/* appSetPug(app) */
/* appSetEJS(app) */
app.set('view engine', 'ejs')
app.set('views', './views/ejs')

// Routing
app.use('/api/productos', productoRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})

app.get('/', async (req, res) => {
    res.render('index')
})

app.get('/products', async (req, res) => {
    const products = await contain1.getAll()

    res.render('products', {products})
})