import '../login/login.css';
import '../login/insertCode.css'
import { useState } from "react";
import ReactCodeInput, { reactCodeInput } from "react-code-input";
import * as Bs from 'react-icons/bs';
// import validateLogin from '../../services/validateLogin';




export default function InsertCode({ setSteps }) {
    const [valueInput, setValueInput] = useState(false);
    const [valid, setValid] = useState(true);

    const styleInput = {
        className: reactCodeInput,
        inputStyle: {
            margin: '2px',
            //   MozAppearance: 'textfield',
            width: '11%',
            height: '40px',
            borderRadius: '10px',
            fontSize: '30px',
            textAlign: 'center',
            backgroundColor: 'white',
            // color: 'black',
            border: 'none'
        },
        inputStyleInvalid: {
            margin: '2px',
            //   MozAppearance: 'textfield',
            width: '11%',
            height: '40px',
            borderRadius: '10px',
            fontSize: '30px',
            textAlign: 'center',
            backgroundColor: 'white',
            // color: 'black',
            border: 'none'
        }
    }
//remover preenchimento automatico

    const handleValueInput = (e) => {
        if (e.length === 6) {
            setValueInput(true);
            if (e !== "222222") {
                setValid(false);
            } else {
                setValid(true);
            }
        } else {
            setValueInput(false);
        }
    };


    return (
        <div className="containerLogin">
            <div className="text">
                <p>Enviamos um código de acesso, verifique em seu e-mail. &#x1F511;</p>
            </div>
            <div className="inputCode">
                <ReactCodeInput
                    name="code"
                    inputMode="numeric"
                    fields={5}
                    type="number"
                    onChange={(e) => handleValueInput(e)}
                    isValid={valid}
                    {...styleInput}
                />
                {valueInput ? '' : null}
            </div>
            <div>
                <button className="buttonLogin" onClick={() => setSteps(1)}><Bs.BsArrowLeft className="arrow" size={45} /></button>
            </div>
        </div>
    );
}
















// import '../login/login.css'
// import '../login/insertCode.css'
// import * as Bs from 'react-icons/bs';
// import React, { createRef } from "react";
// import { useState } from 'react';



// function InsertCode({ setSteps }) {

//     // this.textInput = React.createRef();

//     // const [codeSubmited, setCodeSubmited] = useState(
//     // {
//     //     1: undefined,
//     //     2: undefined,
//     //     3: undefined,
//     //     4: undefined,
//     //     5: undefined,
//     //     6: undefined
//     // }
//     // );

//     let codeSubmited = []

//     function onChangeCode(e) {
//         console.log(e.target.value, e.target.name)
//     }




//     return (
//         <div className="containerLogin">
//             <div className="text">
//                 <p>Enviamos um código de acesso para validar seu acesso.</p>
//             </div>
//             <div>
//                 <div className="divInputCode" >
//                     <input autoFocus value={codeSubmited[0]} id="0" type="number" onChange={onChangeCode} className="inputCode" />
//                 </div>
//                 <div className="divInputCode">
//                     <input value={codeSubmited[1]} id="1" type="number" onChange={onChangeCode} className="inputCode" />
//                 </div>
//                 <div className="divInputCode">
//                     <input value={codeSubmited[2]} id="2" type="number" onChange={onChangeCode} className="inputCode" />
//                 </div>
//                 <div className="divInputCode">
//                     <input value={codeSubmited[3]} id="3" type="number" onChange={onChangeCode} className="inputCode" />
//                 </div>
//                 <div className="divInputCode">
//                     <input value={codeSubmited[4]} id="4" type="number" onChange={onChangeCode} className="inputCode" />
//                 </div>
//                 <div className="divInputCode">
//                     <input value={codeSubmited[5]} id="5" type="number" onChange={onChangeCode} className="inputCode" />
//                 </div>
//             </div>
//             <button className="buttonLogin" onClick={() => setSteps(1)}><Bs.BsArrowLeft className="arrow" size={45} /></button>
//         </div >
//     )
// };









// export default InsertCode;

