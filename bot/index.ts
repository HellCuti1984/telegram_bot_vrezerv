
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

    socket.emit('join', {room: msg.chat.id})
    socket.emit('message', {name: 'miha', message: msg.text})

    bot.sendMessage(chatId, JSON.stringify(msg));
});