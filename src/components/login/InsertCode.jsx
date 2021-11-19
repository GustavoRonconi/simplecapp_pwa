import '../login/login.css'
import '../login/insertCode.css'
import * as Bs from 'react-icons/bs';
import React, { useEffect, useRef } from "react";




function InsertCode({ setSteps }) {

    const focusInput = useRef(null);

    useEffect(() => {
        focusInput.current.focus();

    }, [])

    return (
        <div className="containerLogin">
            <div className="text">
                <p>Enviamos um código de acesso para validar seu acesso.</p>
            </div>
            <div>
                <div className="divInputCode">
                    <input ref={focusInput} name="code" type="text" maxlength="1" onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;" className="inputCode" />
                </div>
                <div className="divInputCode">
                    <input ref={focusInput} name="code" type="text" maxlength="1" onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;" className="inputCode" />
                </div>
                <div className="divInputCode">
                    <input ref={focusInput} name="code" type="text" maxlength="1" onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;" className="inputCode" />
                </div>
                <div className="divInputCode">
                    <input ref={focusInput} name="code" type="text" maxlength="1" onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;" className="inputCode" />
                </div>
                <div className="divInputCode">
                    <input ref={focusInput} name="code" type="text" maxlength="1" onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;" className="inputCode" />
                </div>
                <div className="divInputCode">
                    <input ref={focusInput} name="code" type="text" maxlength="1" onkeypress="if (!isNaN(String.fromCharCode(window.event.keyCode))) return true; else return false;" className="inputCode" />
                </div>
            </div>
            <button className="buttonLogin" onClick={() => setSteps(1)}><Bs.BsArrowLeft className="arrow" size={45} /></button>
        </div >
    )
};









export default InsertCode;

