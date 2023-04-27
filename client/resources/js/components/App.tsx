import {Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import s from './App.module.scss'
import {Chat} from "./Chat";

const App = () => {
    /*useEffect(() => {
        BX24.install(function () {
            BX24.installFinish();
        });

        BX24.callMethod("user.get", {}, function (res: any) {
            console.log(res);
        });

        console.log(BX24.getAuth());
    }, []);*/

    useEffect(() => {
        window.socket.emit('join', {room: Math.random()})
        window.socket.emit('message', {name: 'miha', message: 'kawo'})
        return ()=> {
            window.socket.emit('disconnect')
        }
    }, [])

    return (
        <div className={s.main}>
            <div className={s.panel}>
                <Routes>
                    <Route path="/" element={<Chat/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
