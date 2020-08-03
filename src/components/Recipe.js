import React, { useState } from "react"
import { Container, Row, Col, Image } from 'react-bootstrap'
import RecipeIngredients from "./RecipeIngredients";

const Recipe = ({ recipe }) => {
    const { label, image, shareAs, calories, ingredients } = recipe.recipe;
    const [ show, setShow ] = useState(false)
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
            <Row>
                <Col id="ingredients">
                    <button onClick={() => setShow(!show)}>Ingredients</button>
                    {show && <RecipeIngredients ingredients={ingredients} />}
                </Col>
            </Row>
        </Container>
    )
}

export default Recipe