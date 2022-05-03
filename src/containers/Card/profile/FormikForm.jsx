import { useState, Component } from "react";
import { withFormik, Form, Field, isString, Formik, ErrorMessage } from "formik";
import { Col, Card, CardBody, Button, ButtonToolbar, FormText, Container } from 'reactstrap';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import PencilIcon from 'mdi-react/PencilIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AccountDetailsOutlineIcon from 'mdi-react/AccountDetailsOutlineIcon'
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import EditAvatar from '../../../components/edit-avatar/EditAvatar'
import CellphoneIcon from 'mdi-react/CellphoneIcon'
import CalendarAccountIcon from 'mdi-react/CalendarAccountIcon'
import AccountCheckOutlineIcon from 'mdi-react/AccountCheckOutlineIcon'
import MapMarkersIcon from 'mdi-react/MapMarkersIcon'
import BankIcon from 'mdi-react/BankIcon'
import BankCheckIcon from 'mdi-react/BankCheckIcon'
import axios from 'axios';
import FormField, { renderMaskedField } from '../../../shared/components/FormField';
import validate from '../../../utils/validate';

import ReactInputMask from "react-input-mask";
import MaskedInput from "react-text-mask";
import * as Yup from 'yup'
import { MaskField, useMask } from 'react-mask-field';


const form_id = "form_id";




const baseURL = 'https://61b212bac8d4640017aaf19c.mockapi.io/api/v1'


async function onSubmit(values, data, props, event, image, setImage, updateImage) {
    alert('Dados salvos com sucesso')

    try {
        let response = await axios.post(baseURL + '/profile', data, values, image)
        return response.data
    }
    catch (event) {
        alert(event.message)
    }
};



// function MaintenanceForm(props) {

// const [edit, setEdit] = useState(false)

//     const editOnClick = (event, props, ) => {
//         event.preventDefault();
//         const data = props?.edit;
//         setEdit(data)

//     };

//     const cancelOnClick = (event, props)=> {
//         event.preventDefault();
//         props.resetForm();
//         setEdit(false)

//     };

//     const cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
//     const cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
//     const phoneMask = ['+', /\d/, /\d/, '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
//     const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,]

//     const divNaturalPerson = (props) => {

//         return (
//             <>
//                 <div className="form__form-group"  >
//                     <span className="form__form-group-label">Nome completo</span>
//                     <div className="form__form-group-field">
//                         <div className="form__form-group-icon">
//                             <AccountOutlineIcon />
//                         </div>
//                         <Field
//                             name="name"
//                             component="input"
//                             type="text"
//                             placeholder="Nome completo"
//                         />
//                     </div>
//                 </div>
//                 <div className="form__form-group"  >
//                     <span className="form__form-group-label">CPF</span>
//                     <div className="form__form-group-field">
//                         <div className="form__form-group-icon">
//                             <AccountCheckOutlineIcon />
//                         </div>
//                         <Field
//                             name="cpf"
//                             component={renderMaskedField}
//                             type="text"
//                             placeholder="999.999.999-99"
//                             mask={cpfMask}
//                             guide={false}
//                         />
//                     </div>
//                 </div>
//                 <div className="form__form-group" >
//                     <span className="form__form-group-label">Data de nascimento</span>
//                     <div className="form__form-group-field">
//                         <div className="form__form-group-icon">
//                             <CalendarAccountIcon />
//                         </div>
//                         <Field
//                             name="birthDate"
//                             component="input"
//                             type="date"
//                             placeholder="Data de nascimento"
//                         />
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     const divLegalPerson = (props) => {

//         return (
//             <>
//                 <div className="form__form-group" >
//                     <span className="form__form-group-label">Razão Social</span>
//                     <div className="form__form-group-field">
//                         <div className="form__form-group-icon">
//                             <BankIcon />
//                         </div>
//                         <Field
//                             name="company"
//                             component="input"
//                             type="text"
//                             placeholder="Razão Social"
//                         />
//                     </div>
//                 </div>
//                 <div className="form__form-group" >
//                     <span className="form__form-group-label">CNPJ</span>
//                     <div className="form__form-group-field">
//                         <div className="form__form-group-icon">
//                             <BankCheckIcon />
//                         </div>
//                         <Field
//                             name="cnpj"
//                             component={renderMaskedField}
//                             type="text"
//                             placeholder="99.999.999/9999-99"
//                             mask={cnpjMask}
//                             guide={false}

//                         />
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     function _renderAction(props) {
//         return (

//             <>

//                 <div className="form-statusbar">
//                     {props?.status?.edit ? (
//                         <>
//                             <Button
//                                 type="submit"
//                                 name="save"
//                                 className="icon"
//                                 color="success"
//                                 form={form_id}
//                                 onClick={onSubmit}
//                             >
//                                 <p><ThumbUpOutlineIcon /> Salvar</p>
//                             </Button>
//                             <Button
//                                 type="button"
//                                 name="cancel"
//                                 className="icon"
//                                 color="danger"
//                                 onClick={cancelOnClick}
//                             >
//                                 <p><CloseCircleOutlineIcon />Cancelar</p>
//                             </Button>
//                         </>
//                     ) : (
//                         <Button
//                             type="button"
//                             name="edit"
//                             className="icon"
//                             color="light"
//                             onClick={editOnClick}
//                         >
//                             <p><PencilIcon />Editar</p>
//                         </Button>
//                     )}
//                 </div>

//             </>

//         );
//     }

//     const _renderFormView = (props, avatar, setImage) => {
//         return (

//             <Col xs={12} md={12} lg={12} xl={10}>

//                 <CardBody>

//                     <div className="card__title">
//                         <h5 className="bold-text">FOTO PERFIL</h5>
//                     </div>
//                     {/* <img src={this?.props?.fields?.imageProfile} alt=""/>  */}
//                     <img src={avatar} alt='' />


//                     <div className="form form--horizontal">
//                         <div className="card__title">
//                             <h5 className="bold-text">Dados Pessoais</h5>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">Conta</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <AccountDetailsOutlineIcon />
//                                 </div>
//                                 <p> {props?.fields?.select}</p>

//                             </div>
//                         </div>

//                         {props?.values?.select === "naturalPerson" ?

//                             <>
//                                 <div className="form__form-group"  >
//                                     <span className="form__form-group-label">Nome completo</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <AccountOutlineIcon />
//                                         </div>
//                                         <p> {props?.fields?.name}</p>
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group"  >
//                                     <span className="form__form-group-label">CPF</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <AccountCheckOutlineIcon />
//                                         </div>
//                                         <p> {props?.fields?.cpf}</p>
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group" >
//                                     <span className="form__form-group-label">Data de nascimento</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <CalendarAccountIcon />
//                                         </div>
//                                         <p> {props?.fields?.birthDate}</p>
//                                     </div>
//                                 </div>
//                             </>
//                             :
//                             <>
//                                 <div className="form__form-group" >
//                                     <span className="form__form-group-label">Razão Social</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <BankIcon />
//                                         </div>
//                                         <p> {props?.fields?.company}</p>
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group" >
//                                     <span className="form__form-group-label">CNPJ</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <BankCheckIcon />
//                                         </div>
//                                         <p> {props?.fields?.cnpj}</p>
//                                     </div>
//                                 </div>
//                             </>
//                         }
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">Telefone</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <CellphoneIcon />
//                                 </div>
//                                 <p>{props?.fields?.phone}</p>
//                             </div>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">E-mail</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <AlternateEmailIcon />
//                                 </div>
//                                 <p>{props?.fields?.email}</p>
//                             </div>
//                         </div>
//                         <div className="card__title">
//                             <h5 className="bold-text">Endereço </h5>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">Estado</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <MapMarkersIcon />
//                                 </div>
//                                 <p>{props?.fields?.state}</p>
//                             </div>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">CEP</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <MapMarkersIcon />
//                                 </div>
//                                 <p>{props?.fields?.cep}</p>
//                             </div>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">Cidade</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <MapMarkersIcon />
//                                 </div>
//                                 <p>{props?.fields?.city}</p>
//                             </div>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">Rua</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <MapMarkersIcon />
//                                 </div>
//                                 <p>{props?.fields?.street}</p>
//                             </div>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">Número</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <MapMarkersIcon />
//                                 </div>
//                                 <p>{props?.fields?.number}</p>
//                             </div>
//                         </div>
//                         <div className="form__form-group">
//                             <span className="form__form-group-label">Bairro</span>
//                             <div className="form__form-group-field">
//                                 <div className="form__form-group-icon">
//                                     <MapMarkersIcon />
//                                 </div>
//                                 <p>{props?.fields?.district}</p>
//                             </div>
//                         </div>

//                     </div>

//                 </CardBody>

//             </Col >

//         );
//     };

//     const _renderFormInput = (props, image, setImage) => {
//         return (
//             <>

//                 <Col xs={12} md={12} lg={12} xl={10}>
//                     <CardBody>

//                         <Form>
//                             <div className="card__title">
//                                 <h5 className="bold-text">Alterar Foto</h5>
//                                 <h5 className="subhead">Selecione sua foto de perfil. </h5>
//                             </div>

//                             <EditAvatar setImage={setImage} />




//                             <div className="form form--horizontal">
//                                 <div className="card__title">
//                                     <h5 className="bold-text">Dados Pessoais</h5>
//                                     <h5 className="subhead">Preencha os campos abaixo.</h5>
//                                 </div>

//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">Selecione </span>
//                                     <div className="form__form-group-field">
//                                         <div className="container mt-3">
//                                             <div className="mb-3">
//                                                 <div className="custom-control custom-radio custom-control-inline">

//                                                     <Field
//                                                         name="select"
//                                                         component="input"
//                                                         type="radio"
//                                                         value="naturalPerson"
//                                                         className="custom-control-input"
//                                                         id="natural-person"

//                                                     />

//                                                     <label className="custom-control-label" htmlFor="natural-person">
//                                                         <p>Pessoa Fisica</p>
//                                                     </label>
//                                                 </div>
//                                                 <div className="mb-3 custom-control custom-radio custom-control-inline">
//                                                     <Field
//                                                         name="select"
//                                                         component="input"
//                                                         type="radio"
//                                                         value="legalPerson"
//                                                         className="custom-control-input"
//                                                         id="legal-person"

//                                                     />
//                                                     <label className="custom-control-label" htmlFor="legal-person">
//                                                         <p>Pessoa Jurídica</p>
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 {props?.values?.select === "naturalPerson" ? this.divNaturalPerson() : this.divLegalPerson()}

//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">Telefone</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <CellphoneIcon />
//                                         </div>
//                                         <Field
//                                             name="phone"
//                                             type="text"
//                                             placeholder="+55 (999) 99999-9999"

//                                             component={renderMaskedField}
//                                             mask={phoneMask}
//                                             guide={false}




//                                         />


//                                     </div>
//                                 </div>
//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">E-mail</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <AlternateEmailIcon />
//                                         </div>
//                                         <Field
//                                             name="email"
//                                             component="input"
//                                             type="text"
//                                             placeholder="exemplo@email.com"
//                                         />

//                                     </div>
//                                 </div>
//                                 <div className="card__title">
//                                     <h5 className="bold-text">Endereço </h5>
//                                     <h5 className="subhead">Preencha os campos abaixo. </h5>
//                                 </div>
//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">Estado</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <MapMarkersIcon />
//                                         </div>
//                                         <Field
//                                             name="state"
//                                             // component="input"
//                                             component="input"
//                                             type="text"
//                                             placeholder="Ex: Santa Catarina"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">CEP</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <MapMarkersIcon />
//                                         </div>
//                                         <Field
//                                             name="cep"
//                                             placeholder="99999-999"
//                                             component={renderMaskedField}
//                                             // component="input"
//                                             type="text"
//                                             mask={cepMask}
//                                             guide={false}

//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">Cidade</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <MapMarkersIcon />
//                                         </div>
//                                         <Field
//                                             name="city"
//                                             // component="input"
//                                             component="input"
//                                             type="text"
//                                             placeholder="Ex: Florianópolis"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">Rua</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <MapMarkersIcon />
//                                         </div>
//                                         <Field
//                                             name="street"
//                                             component="input"
//                                             type="text"
//                                             placeholder="Ex: Rua"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">Número</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <MapMarkersIcon />
//                                         </div>
//                                         <Field
//                                             name="number"
//                                             component="input"
//                                             type="number"
//                                             placeholder="Ex: 999 "
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form__form-group">
//                                     <span className="form__form-group-label">Bairro</span>
//                                     <div className="form__form-group-field">
//                                         <div className="form__form-group-icon">
//                                             <MapMarkersIcon />
//                                         </div>
//                                         <Field
//                                             name="district"
//                                             component="input"
//                                             type="text"
//                                             placeholder="Ex: Bairro"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                         </Form>
//                     </CardBody>
//                 </Col >

//             </>
//         );
//     };


//     return (
//         <>
//             <Container >
//                 <Form id={form_id}>
//                     {props?.status?.edit
//                         ? _renderFormInput()
//                         : _renderFormView()}
//                     <ButtonToolbar className="form__button-toolbar">
//                         {_renderAction()}
//                     </ButtonToolbar>

//                 </Form>

//                 <h4>Current value</h4>
//                 <div>
//                     <pre>
//                         <code>{JSON.stringify(props.fields, null, 2)}</code>
//                     </pre>
//                 </div>
//             </Container>
//         </>

//     )
// }

class MaintenanceForm extends Component {

    editOnClick = event => {
        event.preventDefault();
        const data = !this?.props?.status?.edit;
        this.props.setStatus({
            edit: data
        });
    };

    cancelOnClick = event => {
        event.preventDefault();
        this.props.resetForm();
        this.props.setStatus({
            edit: false
        });
    };


    cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    phoneMask = ['+', /\d/, /\d/, '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,]


    divNaturalPerson = () => {

        return (
            <>
                <div className="form__form-group"  >
                    <span className="form__form-group-label">Nome completo</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <AccountOutlineIcon />
                        </div>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Nome completo"
                        />
                    </div>
                </div>
                <div className="form__form-group"  >
                    <span className="form__form-group-label">CPF</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <AccountCheckOutlineIcon />
                        </div>
                        <Field
                            name="cpf"
                            component={renderMaskedField}
                            type="text"
                            placeholder="999.999.999-99"
                            mask={this.cpfMask}
                            guide={false}
                        />
                        <p><ErrorMessage name="cpf" /></p>
                    </div>
                </div>
                <div className="form__form-group" >
                    <span className="form__form-group-label">Data de nascimento</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <CalendarAccountIcon />
                        </div>
                        <Field
                            name="birthDate"
                            component="input"
                            type="date"
                            placeholder="Data de nascimento"
                        />
                    </div>
                </div>
            </>
        )
    }

    divLegalPerson = () => {

        return (
            <>
                <div className="form__form-group" >
                    <span className="form__form-group-label">Razão Social</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <BankIcon />
                        </div>
                        <Field
                            name="company"
                            component="input"
                            type="text"
                            placeholder="Razão Social"
                        />
                    </div>
                </div>
                <div className="form__form-group" >
                    <span className="form__form-group-label">CNPJ</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <BankCheckIcon />
                        </div>
                        <Field
                            name="cnpj"
                            component={renderMaskedField}
                            type="text"
                            placeholder="99.999.999/9999-99"
                            mask={this.cnpjMask}
                            guide={false}

                        />
                        <p><ErrorMessage name="cnpj" /></p>
                    </div>
                </div>
            </>
        )
    }

    _renderAction() {
        return (

            <>

                <div className="form-statusbar">
                    {this?.props?.status?.edit ? (
                        <>
                            <Button
                                type="submit"
                                name="save"
                                className="icon"
                                color="success"
                                form={form_id}
                                onClick={onSubmit}

                            >
                                <p><ThumbUpOutlineIcon /> Salvar</p>
                            </Button>
                            <Button
                                type="button"
                                name="cancel"
                                className="icon"
                                color="danger"
                                onClick={this.cancelOnClick}
                            >
                                <p><CloseCircleOutlineIcon />Cancelar</p>
                            </Button>
                        </>
                    ) : (
                        <Button
                            type="button"
                            name="edit"
                            className="icon"
                            color="light"
                            onClick={this.editOnClick}
                        >
                            <p><PencilIcon />Editar</p>
                        </Button>
                    )}
                </div>

            </>

        );
    }
   
    _renderFormView = (image) => {
        
        return (
            <>

                <Col xs={12} md={12} lg={12} xl={10}>

                    <CardBody>

                        <div className="card__title">
                            <h5 className="bold-text">FOTO PERFIL</h5>
                        </div>
                        {/* <img src={this?.props?.fields?.imageProfile} alt=""/>  */}

                        <img ref={image} alt="avatar" />


                        <div className="form form--horizontal">
                            <div className="card__title">
                                <h5 className="bold-text">Dados Pessoais</h5>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Conta</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <AccountDetailsOutlineIcon />
                                    </div>
                                    <p> {this?.props?.fields?.select}</p>

                                </div>
                            </div>

                            {this?.props?.values?.select === "naturalPerson" ?

                                <>
                                    <div className="form__form-group"  >
                                        <span className="form__form-group-label">Nome completo</span>
                                        <div className="form__form-group-field">
                                            <div className="form__form-group-icon">
                                                <AccountOutlineIcon />
                                            </div>
                                            <p> {this?.props?.fields?.name}</p>
                                        </div>
                                    </div>
                                    <div className="form__form-group"  >
                                        <span className="form__form-group-label">CPF</span>
                                        <div className="form__form-group-field">
                                            <div className="form__form-group-icon">
                                                <AccountCheckOutlineIcon />
                                            </div>
                                            <p> {this?.props?.fields?.cpf}</p>
                                        </div>
                                    </div>
                                    <div className="form__form-group" >
                                        <span className="form__form-group-label">Data de nascimento</span>
                                        <div className="form__form-group-field">
                                            <div className="form__form-group-icon">
                                                <CalendarAccountIcon />
                                            </div>
                                            <p> {this?.props?.fields?.birthDate}</p>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="form__form-group" >
                                        <span className="form__form-group-label">Razão Social</span>
                                        <div className="form__form-group-field">
                                            <div className="form__form-group-icon">
                                                <BankIcon />
                                            </div>
                                            <p> {this?.props?.fields?.company}</p>
                                        </div>
                                    </div>
                                    <div className="form__form-group" >
                                        <span className="form__form-group-label">CNPJ</span>
                                        <div className="form__form-group-field">
                                            <div className="form__form-group-icon">
                                                <BankCheckIcon />
                                            </div>
                                            <p> {this?.props?.fields?.cnpj}</p>
                                        </div>
                                    </div>
                                </>
                            }
                            <div className="form__form-group">
                                <span className="form__form-group-label">Telefone</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <CellphoneIcon />
                                    </div>
                                    {/* <p>{String(this?.props?.fields?.phone)}</p> */}
                                    <p>{this?.props?.fields?.phone}</p>

                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">E-mail</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <AlternateEmailIcon />
                                    </div>
                                    <p>{this?.props?.fields?.email}</p>
                                </div>
                            </div>
                            <div className="card__title">
                                <h5 className="bold-text">Endereço </h5>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Estado</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <MapMarkersIcon />
                                    </div>
                                    <p>{this?.props?.fields?.state}</p>
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">CEP</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <MapMarkersIcon />
                                    </div>
                                    <p>{this?.props?.fields?.cep}</p>
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Cidade</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <MapMarkersIcon />
                                    </div>
                                    <p>{this?.props?.fields?.city}</p>
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Rua</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <MapMarkersIcon />
                                    </div>
                                    <p>{this?.props?.fields?.street}</p>
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Número</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <MapMarkersIcon />
                                    </div>
                                    <p>{this?.props?.fields?.number}</p>
                                </div>
                            </div>
                            <div className="form__form-group">
                                <span className="form__form-group-label">Bairro</span>
                                <div className="form__form-group-field">
                                    <div className="form__form-group-icon">
                                        <MapMarkersIcon />
                                    </div>
                                    <p>{this?.props?.fields?.district}</p>
                                </div>
                            </div>

                        </div>

                    </CardBody>

                </Col >
            </>
        );
    };

    _renderFormInput = () => {


        return (
            <>


                <Col xs={12} md={12} lg={12} xl={10}>
                    <CardBody>

                        <Form onSubmit={onSubmit}>
                            <div className="card__title">
                                <h5 className="bold-text">Alterar Foto</h5>
                                <h5 className="subhead">Selecione sua foto de perfil. </h5>
                            </div>

                            <EditAvatar />


                            <div className="form form--horizontal">
                                <div className="card__title">
                                    <h5 className="bold-text">Dados Pessoais</h5>
                                    <h5 className="subhead">Preencha os campos abaixo.</h5>
                                </div>

                                <div className="form__form-group">
                                    <span className="form__form-group-label">Selecione </span>
                                    <div className="form__form-group-field">
                                        <div className="container mt-3">
                                            <div className="mb-3">
                                                <div className="custom-control custom-radio custom-control-inline">

                                                    <Field
                                                        name="select"
                                                        component="input"
                                                        type="radio"
                                                        value="naturalPerson"
                                                        className="custom-control-input"
                                                        id="natural-person"

                                                    />

                                                    <label className="custom-control-label" htmlFor="natural-person">
                                                        <p>Pessoa Fisica</p>
                                                    </label>
                                                </div>
                                                <div className="mb-3 custom-control custom-radio custom-control-inline">
                                                    <Field
                                                        name="select"
                                                        component="input"
                                                        type="radio"
                                                        value="legalPerson"
                                                        className="custom-control-input"
                                                        id="legal-person"
                                                    />
                                                    <label className="custom-control-label" htmlFor="legal-person">
                                                        <p>Pessoa Jurídica</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {this?.props?.values?.select === "naturalPerson" ? this.divNaturalPerson() : this.divLegalPerson()}

                                <div className="form__form-group">
                                    <span className="form__form-group-label">Telefone</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <CellphoneIcon />
                                        </div>
                                        <Field
                                            name="phone"
                                            type="text"
                                            placeholder="+55 (999) 99999-9999"
                                            // component={renderMaskedField}
                                            mask={this.phoneMask}
                                            guide={false}

                                        />
                                        {/* <MaskField
                                            name="phone"
                                            type="text"
                                            placeholder="+55 (999) 99999-9999"
                                            mask="+55 (___) _____-____"
                                            replacement={{ _: /\d/ }}
                                        /> */}
                                        {/* <ReactInputMask name="phone" mask= "+55 (999) 99999-9999"></ReactInputMask> */}


                                        <p><ErrorMessage name="phone" /></p>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">E-mail</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <AlternateEmailIcon />
                                        </div>
                                        <Field
                                            name="email"
                                            component="input"
                                            type="text"
                                            placeholder="exemplo@email.com"
                                        />
                                        <p><ErrorMessage name="email" /></p>
                                    </div>
                                </div>
                                <div className="card__title">
                                    <h5 className="bold-text">Endereço </h5>
                                    <h5 className="subhead">Preencha os campos abaixo. </h5>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Estado</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <MapMarkersIcon />
                                        </div>
                                        <Field
                                            name="state"
                                            // component="input"
                                            component="input"
                                            type="text"
                                            placeholder="Ex: Santa Catarina"
                                        />
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">CEP</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <MapMarkersIcon />
                                        </div>
                                        <Field
                                            name="cep"
                                            placeholder="99999-999"
                                            component={renderMaskedField}
                                            // component="input"
                                            type="text"
                                            mask={this.cepMask}
                                            guide={false}
                                        />
                                        <p><ErrorMessage name="cep" /></p>
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Cidade</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <MapMarkersIcon />
                                        </div>
                                        <Field
                                            name="city"
                                            // component="input"
                                            component="input"
                                            type="text"
                                            placeholder="Ex: Florianópolis"
                                        />
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Rua</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <MapMarkersIcon />
                                        </div>
                                        <Field
                                            name="street"
                                            component="input"
                                            type="text"
                                            placeholder="Ex: Rua"
                                        />
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Número</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <MapMarkersIcon />
                                        </div>
                                        <Field
                                            name="number"
                                            component="input"
                                            type="number"
                                            placeholder="Ex: 999 "
                                        />
                                    </div>
                                </div>
                                <div className="form__form-group">
                                    <span className="form__form-group-label">Bairro</span>
                                    <div className="form__form-group-field">
                                        <div className="form__form-group-icon">
                                            <MapMarkersIcon />
                                        </div>
                                        <Field
                                            name="district"
                                            component="input"
                                            type="text"
                                            placeholder="Ex: Bairro"
                                        />
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </CardBody>
                </Col >


            </>
        );
    };

    render() {
        return (
            <>
                <Container >
                    <Form id={form_id}>

                        {this?.props?.status?.edit
                            ? this._renderFormInput()
                            : this._renderFormView()}
                        <ButtonToolbar className="form__button-toolbar">
                            {this._renderAction()}
                        </ButtonToolbar>

                    </Form>

                    <h4>Current value</h4>
                    <div>
                        <pre>
                            <code>{JSON.stringify(this.props.fields, null, 2)}</code>
                        </pre>
                    </div>
                </Container>
            </>
        );
    }
}


//esta salvando mesmo com a validação dos erros, conferir 

const schema = Yup.object().shape({
    // email: Yup.string()
    //     .required('O e-mail é obrigatório.')
    //     .email('Endereço de e-mail inválido.'),
    // cep: Yup.string()
    //     .length(9, 'O CEP deve conter 8 números.'),
    // phone: Yup.string()
    //     .required('Informe o número de celular!')
    //     .length(18, 'O número de celular deve conter 14 números.'),
    // cnpj: Yup.string()
    //     .required('Informe o CNPJ!')
    //     .length(18, 'O número de celular deve conter 14 números.'),
    // cnpj: Yup.string()
    //     .required('Informe o CPF!')
    //     .length(14, 'O número de celular deve conter 11 números.'),
    // select: Yup.string()
    //     .required('Selecione uma das opções!'),
})


const FormikForm = withFormik({
    mapPropsToStatus: props => {
        return {
            edit: props?.edit || false
        };
    },
    mapPropsToValues: props => ({
        select: "naturalPerson",

    }),
    handleSubmit: (values, { props, ...actions }) => {
        props.updateFields(values);
        actions.setStatus({
            edit: false
        });
    },
    isInitialValid: false,
    validateOnChange: true,
    validateOnBlur: true,
    displayName: '_renderFormInput',
    validationSchema: schema,
    enableReinitialize: true,
})(MaintenanceForm);


export { FormikForm }
