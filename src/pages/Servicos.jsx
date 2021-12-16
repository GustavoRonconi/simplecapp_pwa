import { Col, Container, Row } from 'reactstrap';
import ExampleCard from '../containers/ExampleTwo/components/ExampleCard';


function Servicos() {
    return (
        <Container className="dashboard">
            <Row>
                <Col md={12}>
                    <h3 className="page-title">SERVIÇOS</h3>
                </Col>
            </Row>
            <Row>
                <ExampleCard />
            </Row>
        </Container>
    )

}
export default Servicos