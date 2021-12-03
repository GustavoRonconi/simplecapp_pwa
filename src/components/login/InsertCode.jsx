import '../login/login.css';
import '../login/insertCode.css'
import ReactCodeInput, { reactCodeInput } from "react-code-input";
import * as Bs from 'react-icons/bs';
import { useState } from 'react'
import sendRegister from '../../services/apiServices';
import api from '../../services/axiosConfig';
import { login } from '../../auth/auth'
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../routes/routes'
import { FormText } from 'reactstrap';
import Loading from './Loading';




export default function InsertCode({ setSteps, valuesLogin }) {

    const [code, setCode] = useState()
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)



    //style code-input
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


    //errors api

    function apiErrorHandle(reason) {
        const fieldsErrorTranslate = {
            'code': 'code'
        }
        if (reason.response.status === 400) {
            reason.response.data.errors.array.forEach(error => {
                var errorsToAppend = {}
                errorsToAppend[fieldsErrorTranslate[error.field]] = error.defaultMessage
                setErrors(errorsToAppend)
            });
        } else if (reason.response.status === 401) {
            setErrors({ code: "Código inválido! Confira se o código digitado está correto ou clique em: " })
        }
        setLoading(false)
    }


    const handleChangeInput = e => {

        if (e.length === 5) {
            setCode(e)
            // chamar o método que envia o código pra API
            setLoading(true);
            api.post("/login").then(
                response => {
                    login(response.data.token);                    
                    navigate(HOME)
                    setLoading(false);
                }
            ).catch((reason) => apiErrorHandle(reason));

        }
    }

    //pegar email e atualizar código
    function resendCode() {
        sendRegister(valuesLogin);

    }


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
                    onChange={handleChangeInput}
                    {...styleInput}
                />
                <div>
                    {errors.code &&
                        <FormText className='textErrors'>{errors.code}
                            <span onClick={resendCode} className='cursor'> Reenviar Código</span>
                        </FormText>


                    }
                </div>
            </div>
            <div>
                {!loading ? <button className="buttonLogin" onClick={() => setSteps(1)}>
                    <Bs.BsArrowLeft className="arrow" size={45} />
                </button> : <Loading />}
            </div>
        </div>
    );
}

