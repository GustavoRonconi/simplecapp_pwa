import Login from '../components/login/Login'
import InsertCode from '../components/login/InsertCode';
import '../pages/pageLogin.css'
import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';


function PageLogin() {

    const [loginSteps, setSteps] = useState(1);
    const [valuesLogin, setValuesLogin] = useState({});
    

    return (

        <div style={{ backgroundColor: 'rgb(247, 222, 80)'}}>
            <Container style={{ backgroundColor: 'rgb(247, 222, 80)', height: '100vh' }}>
                <Row>
                    <Col style={{ margin: '2.5% 0 0 4.5%' }}>
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
        </div>
    )

}

export default PageLogin