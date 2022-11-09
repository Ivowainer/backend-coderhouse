import express from 'express';
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import { createServer } from "http";

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer);

// Mid
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
dotenv.config()

// Config
const PORT = process.env.PORT || 8080

httpServer.listen(PORT, () => {
    console.log(`The server is running in ${PORT}`)
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



