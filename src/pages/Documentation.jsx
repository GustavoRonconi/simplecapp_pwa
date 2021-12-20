import { Col, Container, Row } from 'reactstrap';
import MainWrapper from '../containers/App/MainWrapper';
import ExampleCard from '../containers/ExampleTwo/components/ExampleCard';
import Layout from '../containers/Layout';

function Documentation() {
  return (
    <MainWrapper>
      <main >
        <div>
          <Layout />
          <div className="container__wrap" >
            <Container className="dashboard">
              <Row>
                <Col md={12}>
                  <h3 className="page-title">Documentação</h3>
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
export default Documentation