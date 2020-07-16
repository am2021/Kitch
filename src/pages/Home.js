import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import ingredients from "../img/ingredients.png"
import cooking from "../img/cooking.png"
import Message from '../components/Message'

const Home = () => {
    return(
        <div>
            <Message />
            <Container>
                <Row className="justify-content-md-center">
                    <Col id="column">
                        <Image src={cooking} rounded fluid></Image>
                    </Col>
                    <Col id="column">
                        <Image src={ingredients} rounded fluid></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home