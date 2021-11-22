import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
// import {FormText } from 'reactstrap';
import '../login/login.css'
import * as Bs from 'react-icons/bs';




export default class Login extends Component {

  onSubmit = (values) => {
    this.props.setSteps(2)

  }
  

  render() {
    return <div className="containerLogin">
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="styleText">
              <p className="text1">Olá, bem-vindo(a) a plataforma SimpleCapp &#x1F4B0; </p>
              <p className="text2">Digite seu e-mail e receba um código de acesso.</p>
            </div>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="E-mail..."
                className="field"
              />
              {/* {errors.email && <FormText color="danger">
                {errors.email}
              </FormText>} */}
            </div>
            <button className="buttonLogin" type="submit"><Bs.BsArrowRight className="arrow" size={45} /></button>
          </form>)}
      </Form>
    </div>
  }

}



// function Login({ setSteps }) {
//   const onSubmit = (values) => {
//     console.log('avançar step')
//     setSteps(2)
//   }


//   return <div className="containerLogin">
//     <Form onSubmit={onSubmit}>
//       {({ handleSubmit }) => (
//         <form onSubmit={handleSubmit}>
//           <div className="styleText">
//             <p className="text1">Olá, bem-vindo(a) a plataforma SimpleCapp &#x1F4B0; </p>
//             <p className="text2">Digite seu e-mail e receba um código de acesso.</p>
//           </div>
//           <div>
//             <Field
//               name="email"
//               component="input"
//               type="email"
//               placeholder="E-mail..."
//               className="field"
//             />
//           </div>
//           <button className="buttonLogin" type="submit"><Bs.BsArrowRight className="arrow" size={45} /></button>
//         </form>)}
//     </Form>
//   </div>
// }


// export default Login;

