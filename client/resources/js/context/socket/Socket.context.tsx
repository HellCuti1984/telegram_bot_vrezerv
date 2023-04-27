import {  createContext } from 'react'
import {Socket} from "socket.io-client";

export interface ISetSocketContextProps {
    socket: null | Socket
}

interface IContextSocketProps {
    setSocketContext: ({socket}: ISetSocketContextProps) => void
}

export const SocketContext = createContext<IContextSocketProps>({
    setSocketContext: ({socket}: ISetSocketContextProps) => null
})
