import React, {useEffect, useState} from 'react';

import s from './Messages.module.scss'
import {io} from "socket.io-client";

const socket = io('http://localhost:5000')
const Messages = () => {

    const [messages, setMessages] = useState<string[]>([]);

    const handleClick = () => {
        socket.emit('send_to_bot', {chatId: 629766125, msg: Math.random().toString()})
    }

    useEffect(()=>{
        socket.emit('join', {room: 629766125})
    }, [])

    useEffect(() => {
        socket.on('get_on_client', ({msg}) => {
            console.log(msg)
            setMessages(prev => [...prev, msg]);
        })

        return () => {
            socket.emit('disconnect')
        }
    }, [])

    return (
        <div className={s.messages}>
            <button onClick={handleClick}>Отправить сообщение</button>
            {messages.map(message =>
                <div key={message} className={s.message}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Messages;
