import { Col, Container, Row } from 'reactstrap';
import ExampleCard from '../containers/ExampleTwo/components/ExampleCard';
import MainWrapper from '../containers/App/MainWrapper';
import Layout from '../containers/Layout';

function Sobre() {
    return (
        <MainWrapper>
            <main >
                <div>
                    <Layout />
                    <div className="container__wrap" >
                        <Container className="dashboard">
                            <Row>
                                <Col md={12}>
                                    <h3 className="page-title">Sobre</h3>
                                </Col>
                            </Row>
                            <Row>
                                <ExampleCard />
                            </Row>
                        </Container>
                    </div>
                </div>
            </main>
        </MainWrapper>
    )

}
export default Sobre