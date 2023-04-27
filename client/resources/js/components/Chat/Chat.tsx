import React from 'react';

import s from './Chat.module.scss'
import {List} from "./List";
import Messages from "./Messages/Messages";

const Chat = () => {
    return (
        <div className={s.chat}>
            <List/>
            <Messages/>
        </div>
    );
};

export default Chat;
