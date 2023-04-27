import React from 'react';
import {SocketContext, ISetSocketContextProps} from './Socket.context'

const Socket = ({children}: { children: JSX.Element }) => {

    const [socket, setSocket] =

    const setPopupContext = ({socket}: ISetSocketContextProps) => {
        setPopupProps({socket})
        return null
    }


    return (
        <SocketContext.Provider value={{socket: null}}>
            {children}
        </SocketContext.Provider>
    )
};

export default Socket;
