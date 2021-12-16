import { Col, Container, Row } from 'reactstrap';
import ExampleCard from '../containers/ExampleTwo/components/ExampleCard';



function Home() {
  return (
    <Container className="dashboard">
      <Row>
      <Col md={12}>
        <h3 className="page-title">Home</h3>
      </Col>
    </Row>
    <Row>
      <ExampleCard />
    </Row>
    </Container>
  )
};

export default Home;