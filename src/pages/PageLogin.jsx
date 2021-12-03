import Login from '../components/login/Login'
import InsertCode from '../components/login/InsertCode';
import '../pages/pageLogin.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';


function PageLogin() {

    const [loginSteps, setSteps] = useState(1);
    const [valuesLogin, setValuesLogin] = useState({});

    return (


        <Container style={{ backgroundColor: 'rgb(247, 222, 80)', height: '100vh' }}>
            <Row>
                <Col>
                    <img className="image" src="images/logo.png" alt="logo" />
                </Col>
            </Row>
            <Row>
                <Col>
                    {loginSteps === 1 ?
                        <Login setSteps={setSteps} setValuesLogin={setValuesLogin} /> :
                        <InsertCode setSteps={setSteps} valuesLogin={valuesLogin} />}
                </Col>
            </Row>
        </Container>

    )

}

export default PageLogin