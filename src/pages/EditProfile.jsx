import { Col, Container, Row, Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import MainWrapper from '../containers/App/MainWrapper';
import Layout from '../containers/Layout';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import EditAvatar from '../components/edit-avatar/EditAvatar'
import PhoneClassicIcon from 'mdi-react/PhoneClassicIcon'
import CalendarAccountIcon from 'mdi-react/CalendarAccountIcon'
import AccountCheckOutlineIcon from 'mdi-react/AccountCheckOutlineIcon'
import HomeEditOutlineIcon from 'mdi-react/HomeEditOutlineIcon'


//pegar eventos, arrumar botão submit, arrumar botão escolhr arquivo

function EditProfile({ onSubmit }) {

    function onSubmit(e) {
        e.preventDefault();
        alert('salvo com sucesso')


    }

    return (
        <MainWrapper>
            <main >
                <div>
                    <Layout />
                    <div className="container__wrap" >
                        <Container className="dashboard">
                            <Row>
                                <Col md={12}>
                                    <h3 className="page-title">Editar Perfil</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12} xl={10}>

                                    <Card>
                                        <CardBody>

                                        <div className="card__title">
                                                <h5 className="bold-text">Alterar Foto</h5>
                                                <h5 className="subhead">Selecione sua foto de perfil.</h5>
                                            </div>
                                           <EditAvatar/>

                                            <div className="card__title">
                                                <h5 className="bold-text">Dados Pessoais</h5>
                                                <h5 className="subhead">Preencha os campos abaixo.</h5>
                                            </div>
                                            <Form onSubmit={onSubmit}>
                                                {({ handleSubmit, form }) => (
                                                    <form className="form form--horizontal" onSubmit={handleSubmit}>
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
                                                            <span className="form__form-group-label">Data de nascimento</span>
                                                            <div className="form__form-group-field">
                                                                <div className="form__form-group-icon">
                                                                    <CalendarAccountIcon />
                                                                </div>
                                                                <Field
                                                                    name="birth-date"
                                                                    component="input"
                                                                    type="date"
                                                                    placeholder="Data de nascimento"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form__form-group">
                                                            <span className="form__form-group-label">CPF ou CNPJ</span>
                                                            <div className="form__form-group-field">
                                                                <div className="form__form-group-icon">
                                                                    <AccountCheckOutlineIcon />
                                                                </div>
                                                                <Field
                                                                    name="cpf"
                                                                    component="input"
                                                                    type="number"
                                                                    placeholder="CPF/CNPJ"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form__form-group">
                                                            <span className="form__form-group-label">Telefone</span>
                                                            <div className="form__form-group-field">
                                                                <div className="form__form-group-icon">
                                                                    <PhoneClassicIcon />
                                                                </div>
                                                                <Field
                                                                    name="phone"
                                                                    component="input"
                                                                    type="number"
                                                                    placeholder="(99)99999-9999"
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
                                                        <Form onSubmit={onSubmit}>
                                                            {({ handleSubmit, form }) => (
                                                                <form className="form form--horizontal" onSubmit={handleSubmit}>
                                                                    <div className="form__form-group">
                                                                        <span className="form__form-group-label">Estado</span>
                                                                        <div className="form__form-group-field">
                                                                            <div className="form__form-group-icon">
                                                                                <HomeEditOutlineIcon />
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
                                                                                <HomeEditOutlineIcon />
                                                                            </div>
                                                                            <Field
                                                                                name="cep"
                                                                                component="input"
                                                                                type="number"
                                                                                placeholder="99999-999"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form__form-group">
                                                                        <span className="form__form-group-label">Cidade</span>
                                                                        <div className="form__form-group-field">
                                                                            <div className="form__form-group-icon">
                                                                                <HomeEditOutlineIcon/>
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
                                                                                <HomeEditOutlineIcon />
                                                                            </div>
                                                                            <Field
                                                                                name="street"
                                                                                component="input"
                                                                                type="number"
                                                                                placeholder="Ex: rua"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form__form-group">
                                                                        <span className="form__form-group-label">Número</span>
                                                                        <div className="form__form-group-field">
                                                                            <div className="form__form-group-icon">
                                                                                <HomeEditOutlineIcon />
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
                                                                                <HomeEditOutlineIcon />
                                                                            </div>
                                                                            <Field
                                                                                name="district"
                                                                                component="input"
                                                                                type="text"
                                                                                placeholder="Ex: bairro"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            )}
                                                        </Form>

                                                        <ButtonToolbar className="form__button-toolbar">
                                                            <Button type="submit" className="icon" color="success"><p><ThumbUpOutlineIcon /> Salvar</p></Button>
                                                            <Button type="button" onClick={form.reset} className="icon" color="danger"><p><CloseCircleOutlineIcon />Cancel</p></Button>
                                                        </ButtonToolbar>
                                                    </form>
                                                )}
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </main>
        </MainWrapper>
    )

}
export default EditProfile