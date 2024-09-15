import { Col, Container, Row } from 'reactstrap';




function NotFound() {
  return (
      <Container className="dashboard" >
        <Row>
          <Col md={12}>
            <h3 className="page-title">Página não encontrada</h3>
          </Col>
        </Row>
      </Container>
  
  )
};

export default NotFound;