import React from "react";
import {store} from './store/store'
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {io} from 'socket.io-client'

/*ПРОКИДКА */
declare global {
    interface Window { socket: any; }
}
window.socket = io('http://localhost:5000')

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
