const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const route = require('./route')
const {Server} = require("socket.io");

app.use(cors({origin: '*'}))
app.use(route)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', "POST"]
    }
})

io.on('connection', (socket) => {
    socket.on('join', ({room}) => {
        socket.join(room)
        socket.on('message', ({message, chatId})=>{
            socket.emit('sent_to_client', ({chatId: chatId, msg: message}))
            socket.emit('send_to_bot', ({chatId: chatId, msg: message}))
        })
    })

    socket.on('disconnect', () => {
    })
})

server.listen(5000, () => {
    console.log('listening')
})