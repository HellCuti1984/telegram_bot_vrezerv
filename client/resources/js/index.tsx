import React from "react";
import {store} from './store/store'
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
