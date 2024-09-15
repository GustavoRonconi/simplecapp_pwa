import { Col, Container, Row, Card } from 'reactstrap';
import MainWrapper from '../containers/App/MainWrapper';
import Layout from '../containers/Layout';

import { useState } from "react";
import AppTest from '../containers/Card/profile/AppTest';
import { FormikForm, Formulario } from '../containers/Card/profile/FormikForm';
import EditAvatar from '../components/edit-avatar/EditAvatar';


function EditProfile({ props }) {

    const [loginSteps, setSteps] = useState(1);
    const [valuesLogin, setValuesLogin] = useState({});

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

                                <AppTest />
                                {/* <FormikForm/> */}
                                {/* <EditAvatar/> */}


                            </Row>

                        </Container>

                    </div>
                </div>
            </main>
        </MainWrapper>
    )

}
export default EditProfile