require('dotenv').config();
import {io} from 'socket.io-client'

const TelegramBot = require('node-telegram-bot-api');
import {API} from './src/api'
import {Message} from './src/models/Message'

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

const socket = io('http://localhost:5000')
bot.on('message', (msg: Message) => {
    const chatId = msg.chat.id;
    console.log(chatId)
    socket.emit('join', {room: chatId})
    socket.emit('message', {name: 'miha', msg: msg.text, chatId: chatId})

    //bot.sendMessage(chatId, JSON.stringify(msg));
});

socket.on('send_to_bot', ({chatId, msg}) => {
    console.log(msg)
    bot.sendMessage(chatId, msg)
})