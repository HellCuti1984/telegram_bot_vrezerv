import {useContext} from "react";
import {SocketContext} from "./Socket.context";

export const usePopupContext = () => useContext(SocketContext)
