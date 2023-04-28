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

    socket.emit('join', {room: chatId})
    socket.emit('sent_to_client', {chatId: chatId, msg: msg.text})

    bot.sendMessage(chatId, JSON.stringify(msg));
});

socket.on('send_to_bot', ({chatId, msg}) => {
    // @ts-ignore
    bot.sendMessage(chatId, msg).then(r => console.log(r))
})