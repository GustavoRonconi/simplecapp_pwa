import { Col, Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import EditAvatar from '../../../components/edit-avatar/EditAvatar'
import CellphoneIcon from 'mdi-react/CellphoneIcon'
import CalendarAccountIcon from 'mdi-react/CalendarAccountIcon'
import AccountCheckOutlineIcon from 'mdi-react/AccountCheckOutlineIcon'
import MapMarkersIcon from 'mdi-react/MapMarkersIcon'
import BankIcon from 'mdi-react/BankIcon'
import BankCheckIcon from 'mdi-react/BankCheckIcon'

import formatString from "format-string-by-pattern";


import "./cardRadioButton.css"

//pegar eventos e enviar api, corrigir mascara, esconder opçoes conforme escolher pessoa fisica ou privada, 
//enviar foto no submit, colocar errors

function CardEditProfile() {

  const onSubmit = (values, event) => {
    // alert('Dados salvos com sucesso')
    window.alert(JSON.stringify(values, 0, 2));

  }

  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Endereço de e-mail inválido.';
    }

    return errors
  };

  // const masks = [
  //   { name: "name", placeholder: "Nome Completo", icon: <AccountOutlineIcon />, title: "Nome", },
  //   { name: "cep", parse: "99999-999", icon: <AccountOutlineIcon />, title: "Telefone",  },
  //   { name: "cpf", parse: "999.999.999-99", icon: <AccountOutlineIcon />, title: "Telefone", },
  //   { name: "cnpj", parse: "99.999.999/9999-99", icon: <AccountOutlineIcon />, title: "Telefone",  }
  // ];

  // const masks = [
  //   { name: "phone", parse: "+55 (999) 99999-9999"},
  //   { name: "cep", parse: "99999-999"},
  //   { name: "cpf", parse: "999.999.999-99"},
  //   { name: "cnpj", parse: "99.999.999/9999-99" }
  // ]

  return (
    <Col xs={12} md={12} lg={12} xl={10}>

      <Card>
        <CardBody>

          <Form onSubmit={onSubmit} validade={validate} >
            {({ handleSubmit, form, values, submitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="card__title">
                  <h5 className="bold-text">Alterar Foto</h5>
                  <h5 className="subhead">Selecione sua foto de perfil.</h5>
                </div>

                <EditAvatar name="imageProfile"/>

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
                              value="natural-person"
                              className="custom-control-input"
                              id="natural-person"
                              checked
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
                              value="legal-person"
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
                  {/* 

                  {masks.map(mask => (
                    <div className="form__form-group">
                      <span className="form__form-group-label">{mask.title}</span>
                      <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                          {mask.icon}
                        </div>
                        {
                          !mask.parse ? <Field
                          component="input"
                          name={mask.name}
                          type={mask.type}
                          
                          placeholder={mask.placeholder}
                        /> : <Field
                        component="input"
                        name={mask.name}
                        parse={formatString(mask.parse)}
                        placeholder={mask.parse}
                        type={mask.type}
                        
                      />
                        }
                      </div>
                    </div>

                  ))} */}













                  <div className="form__form-group">
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
                  
                  <div className="form__form-group">
                    <span className="form__form-group-label">CPF</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <AccountCheckOutlineIcon />
                      </div>
                      <Field
                        name="cpf"
                        component="input"
                        // type="number"
                        placeholder="999.999.999-99"
                        parse={formatString("999.999.999-99")}
                      />
                    </div>
                  </div>
                  <div className="form__form-group">
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
                  <div className="form__form-group">
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
                  <div className="form__form-group">
                    <span className="form__form-group-label">CNPJ</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <BankCheckIcon />
                      </div>
                      <Field
                        name="cnpj"
                        component="input"
                        // type="number"
                        placeholder="99.999.999/9999-99"
                        parse={formatString("99.999.999/9999-99")}
                      />
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">Telefone</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <CellphoneIcon />
                      </div>
                      <Field
                        name="phone"
                        component="input"
                        placeholder="+55 (999) 99999-9999"
                        parse={formatString("+55 (999) 99999-9999")}
                      />
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
                        type="email"
                        placeholder="exemplo@email.com"
                      />

                    </div>
                  </div>

                  <div className="card__title">
                    <h5 className="bold-text">Endereço</h5>
                    <h5 className="subhead">Preencha os campos abaixo.</h5>
                  </div>


                  <div className="form__form-group">
                    <span className="form__form-group-label">Estado</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <MapMarkersIcon />
                      </div>
                      <Field
                        name="country"
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
                        component="input"
                        // type="number"
                        placeholder="99999-999"
                        parse={formatString("99999-999")}
                       
                      />
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


                  <ButtonToolbar className="form__button-toolbar">
                    <Button type="submit" className="icon" color="success"><p><ThumbUpOutlineIcon /> Salvar</p></Button>
                    <Button type="button" onClick={form.reset} className="icon" color="danger"><p><CloseCircleOutlineIcon />Cancelar</p></Button>
                  </ButtonToolbar>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col >
  )
}

export default CardEditProfile