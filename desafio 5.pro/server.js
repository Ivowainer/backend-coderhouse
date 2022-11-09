import express, { urlencoded } from 'express'
import dotenv from 'dotenv';
import { Server } from 'socket.io'
import { createServer } from "http";

import productoRouter from './routes/productosRouter.js';
import { contain1 } from './fileManager.js';

import { appSetPug } from './utils/appSetPug.js';
import { appSetEJS } from './utils/appSetEJS.js';

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer);

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

// Serve
httpServer.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})

app.get('/', async (req, res) => {
    const products = await contain1.getAll()

    res.render('index', {products})
})

// Sockets
const messages = [];

io.on("connection", (socket) => {

    socket.emit("UPDATE_MESSAGES", messages)
    
    socket.on("MESSAGE_SERVER", (data) => {
        messages.push(data)
        
        io.emit("UPDATE_MESSAGES", messages)
    })
});
