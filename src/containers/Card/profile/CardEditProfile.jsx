import { useState } from 'react';
import { Col, Card, CardBody, Button, ButtonToolbar, FormText } from 'reactstrap';
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
import axios from 'axios';
import FormField, { renderMaskedField } from '../../../shared/components/FormField';
import validate from '../../../utils/validate';


//pegar eventos e enviar api, esta pegando os campos ocultados - corrigir
//enviar foto no submit, css radio

function CardEditProfile() {

  //CRIAR STATE PARA CADA CAMPO DO FORMULARIO

  const baseURL = 'https://61b212bac8d4640017aaf19c.mockapi.io/api/v1'

  const onSubmit = (values, e) => {
    // alert('Dados salvos com sucesso')
    e.preventDefault()

    window.alert(JSON.stringify(values, 0, 2));

    try {
      let response = axios.post(baseURL + '/profile')
      return response.data
    }
    catch (e) {
      alert(e.message)
    }


    //metodo pacht
    // const res = await axios.patch('https://httpbin.org/patch', { firstName: 'MasteringJS' });
    // res.data.headers['Content-Type']; //application/json;charset=utf-8

  }

  const cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  const cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  const phoneMask = ['+', /\d/, /\d/, '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,]



  const divNaturalPerson = (image) => {

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
              component={FormField}
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
              mask={cpfMask}
              guide={false}
            />

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
              component={FormField}
              type="date"
              placeholder="Data de nascimento"
            />
          </div>
        </div>
      </>
    )
  }

  const divLegalPerson = () => {

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
              component={FormField}
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
              mask={cnpjMask}
              guide={false}

            />
          </div>
        </div>
      </>
    )
  }


  return (
    <Col xs={12} md={12} lg={12} xl={10}>

      <Card>
        <CardBody>

          <Form onSubmit={onSubmit} validate={validate} initialValues={{
            select: "naturalPerson"
          }}>
            {({ handleSubmit, form, pristine, submitting, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="card__title">
                  <h5 className="bold-text">Alterar Foto</h5>
                  <h5 className="subhead">Selecione sua foto de perfil.</h5>
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

                  {values.select === "naturalPerson" ? divNaturalPerson() : divLegalPerson()}

                  <div className="form__form-group">
                    <span className="form__form-group-label">Telefone</span>
                    <div className="form__form-group-field">
                      <div className="form__form-group-icon">
                        <CellphoneIcon />
                      </div>
                      <Field
                        name="phone"
                        placeholder="+55 (999) 99999-9999"
                        component={renderMaskedField}
                        type="text"
                        mask={phoneMask}
                        guide={false}
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
                        component={FormField}
                        type="text"
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
                        component={FormField}
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
                        type="text"
                        mask={cepMask}
                        guide={false}

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
                        component={FormField}
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
                        component={FormField}
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
                        component={FormField}
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
                        component={FormField}
                        type="text"
                        placeholder="Ex: Bairro"
                      />
                    </div>
                  </div>

                  <ButtonToolbar className="form__button-toolbar">
                    <Button type="submit" disabled={pristine || submitting} className="icon" color="success" ><p><ThumbUpOutlineIcon /> Salvar</p></Button>
                    <Button type="button" onClick={form.reset} disabled={pristine || submitting} className="icon" color="danger"><p><CloseCircleOutlineIcon />Cancelar</p></Button>
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