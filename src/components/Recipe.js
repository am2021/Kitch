import React from "react"
import { Container, Row, Col, Image } from 'react-bootstrap'

const Recipe = ({ recipe }) => {
    const { label, image } = recipe.recipe;

    return(
        <Container id="recipe" className="justify-content-md-center">
            <Row>
                <Col>
                    <Image src={image} roundedCircle />
                </Col>
                <Col>
                    <h3>{label}</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Recipe