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
    console.log('CONNECTION')
    socket.on('join', ({room}) => {
        socket.join(room)
        socket.on('message', ({name, message})=>{
            console.log(message)
        })
    })

    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})

server.listen(5000, () => {
    console.log('listening')
})