import React from 'react';
import SignupForm from '../components/SignupForm';
import { Container, Row, Col } from 'react-bootstrap'

const Signup = () => {
    return(
        <div>
            <Container id="formContainer">
                <Row className="justify-content-md-center">
                    <Col lg={6}>
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup