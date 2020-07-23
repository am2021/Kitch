import React from 'react';
import LoginForm from '../components/LoginForm'
import { Container, Row, Col } from 'react-bootstrap'
import welcome from "../img/welcome.jpg"

const Login = () => {
    return(
        <div styles={{ backgroundImage:`url(${welcome})` }}>
            <Container id="formContainer">
                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login