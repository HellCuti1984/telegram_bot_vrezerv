import React, {useEffect, useState} from 'react';

import s from './Messages.module.scss'
import {io} from "socket.io-client";

const socket = io('http://localhost:5000')
const Messages = () => {

    const [messages, setMessages] = useState<string[]>([]);

    const handleClick = () => {
        socket.emit('message', {name: 'miha', message: 'CLIENT'})
    }


    useEffect(() => {
        socket.emit('join', {room: 629766125})
        socket.on('sent_to_client', ({msg}) => {
            setMessages(prev=>[...prev, msg]);
        })
        return ()=> {
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
