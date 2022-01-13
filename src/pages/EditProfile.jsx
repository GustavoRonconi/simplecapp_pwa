import { Col, Container, Row  } from 'reactstrap';
import MainWrapper from '../containers/App/MainWrapper';
import Layout from '../containers/Layout';
import CardEditProfile from '../containers/Card/profile/CardEditProfile';




function EditProfile() {

    


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
                              <CardEditProfile/>
                            </Row>
                        </Container>
                    </div>
                </div>
            </main>
        </MainWrapper>
    )

}
export default EditProfile