import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import ingredients from "../img/ingredients.png"
import cooking from "../img/cooking.png"

const Main = () => {
    return(
        <div>
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

export default Main