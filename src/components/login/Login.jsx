import { FormText } from 'reactstrap';
import '../login/login.css'
import * as Bs from 'react-icons/bs';
import { Form, Field } from 'react-final-form';
import sendRegister from '../../services/apiServices';
import { useState } from 'react';
import Loading from './Loading';

function Login({ setSteps, setValuesLogin }) {
  
  const [loading, setLoading] = useState(false)

  //requisita a api, seta os valores de formulário e avança p/ a próxima etapa 
  async function onSubmit(values) {
    setLoading(true)
    let valuesRegistred = await sendRegister(values)
    setValuesLogin(valuesRegistred)
    
    setSteps(2)
    
  }


  // //requisita a api, seta os valores de formulário e avança p/ a próxima etapa 
  // const onSubmit = (values) => {
  //   let valuesRegistred = sendRegister(values)
  //   setValuesLogin(valuesRegistred)
  //   setSteps(2)
  // }


  //validação e seta o erros
  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Endereço de e-mail inválido.';
    }
    setLoading(false)
    return errors   
  }

  return (<div className="containerLogin">
    <Form onSubmit={onSubmit} validate={validate}>
      {({ handleSubmit, }) => (
        <form onSubmit={handleSubmit}>
          <div className="styleText">
            <p className="text1">Olá, bem-vindo(a) a plataforma SimpleCapp &#x1F4B0; </p>
            <p className="text2">Digite seu e-mail e receba um código de acesso.</p>
          </div>
          <div >
            <Field
              aria-label="email"
              name="email"
              component="input"
              type="text"
            >

              {({ input, meta }) => (
                <div >
                  <input {...input} placeholder='E-mail' className="field" />
                  {meta.error && meta.touched && <FormText className='textErrors'>{meta.error}</FormText>}
                </div>
              )}

            </Field>
          
          </div>
         
          {!loading ? <button className="buttonLogin" type="submit" >
            <Bs.BsArrowRight className="arrow" size={45} />
          </button>  : <Loading />}
          
        </form>)}
        
    </Form>
  </div>
  )

}

export default Login


