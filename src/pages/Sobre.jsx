import { Col, Container, Row } from 'reactstrap';
import ExampleCard from '../containers/ExampleTwo/components/ExampleCard';


function Sobre() {
    return (
        <Container className="dashboard">
            <Row>
                <Col md={12}>
                    <h3 className="page-title">SOBRE</h3>
                </Col>
            </Row>
            <Row>
                <ExampleCard />
            </Row>
        </Container>
    )

}
export default Sobre