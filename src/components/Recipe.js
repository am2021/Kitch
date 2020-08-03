import React from "react"
import { Container, Row, Col, Image } from 'react-bootstrap'

const Recipe = ({ recipe }) => {
    const { label, image, shareAs, calories } = recipe.recipe;
    var calorieCount = parseInt(calories)

    return(
        <Container id="recipe" className="justify-content-md-center">
            <Row>
                <Col>
                    <Image src={image} roundedCircle />
                </Col>
                <Col>
                    <a href={shareAs}><h3>{label}</h3></a>
                    <h4>Calories: {calorieCount}</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Recipe