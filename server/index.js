const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const route = require('./route')
const {Server} = require("socket.io");

app.use(cors({origin: '*'}))
app.use(route)
console.clear();
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', "POST"]
    }
})

io.on('connection', (socket) => {
    socket.on('join', ({room}) => {
        socket.join(room)

        socket.on('sent_to_client', ({msg, chatId})=>{
            socket.broadcast.to(room).emit('get_on_client', ({chatId: chatId, msg: msg}))
            socket.emit('get_on_client', ({chatId: chatId, msg: msg}))
            console.log(msg)
            //socket.emit('send_to_bot', ({chatId: chatId, msg: msg}))
        })
    })

    socket.on('disconnect', () => {
    })
})

server.listen(5000, () => {
    console.log('listening')
})