import React, {useState} from 'react';
import {SocketContext, ISetSocketContextProps} from './Socket.context'

const Socket = ({children}: { children: JSX.Element }) => {

    const [socket, setSocket] = useState(null);

    const setPopupContext = ({socket}: ISetSocketContextProps) => {
        setSocket({socket})
        return null
    }

    return <></>
    /*return (
        <SocketContext.Provider value={{socket: null}}>
            {children}
        </SocketContext.Provider>
    )*/
};

export default Socket;
