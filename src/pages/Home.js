import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import Recipe from "../components/Recipe"
import Ingredients from "../components/Ingredients"
import Message from '../components/Message'
import Search from '../components/Search'
import Axios from 'axios';

const Home = () => {
    const [ recipes, setRecipes ] = useState([])
    const [ recipeFilter, setRecipeFilter ] = useState('')
    const [ ingredients, setIngredients ] = useState([])
    const [ ingredientsFilter, setIngredientsFilter ] = useState('')

    const APP_ID = "b53592e8"
    const APP_KEY = "6fc0997c3b3fc56715a2f2922b74fc43"
    const APP_ID2 = "57f3a7f1"
    const APP_KEY2 = "b587add8e9ced7f185ebb87995316ff3"

    const url = `https://api.edamam.com/search?q=${recipeFilter}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const url1 = `https://api.edamam.com/api/food-database/v2/parser?&ingr=${ingredientsFilter}&app_id=${APP_ID2}&app_key=${APP_KEY2}`

    const getData = async () => {
        if (recipeFilter !== "") {
            const result = await Axios.get(url)

            if(!result.data.more) {
                console.log("no results")
            }
            
            console.log(result.data.hits)
            setRecipes(result.data.hits)
        } else {
            console.log("empty query")
        }
    }

    const handleRecipeFilter = (event) => {
        setRecipeFilter(event.target.value)
    }

    const handleRecipeSubmit = (event) => {
        event.preventDefault()
        getData()
    }

    const getData1 = async () => {
        if (ingredientsFilter !== "") {
            const result1 = await Axios.get(url1)

            if(!result1.data.more) {
                console.log("no results")
            }
            
            console.log(result1.data.hints)
            setIngredients(result1.data.hints)
        } else {
            console.log("empty query")
        }
    }

    const handleIngredientsFilter = (event) => {
        setIngredientsFilter(event.target.value)
    }

    const handleIngredientsSubmit = (event) => {
        event.preventDefault()
        getData1()
    }


    return(
        <div>
            <Message />
            {/* <Container>
                <Row className="justify-content-md-center">
                    <Col id="column">
                        <Image src={cooking} rounded fluid></Image>
                    </Col>
                    <Col id="column">
                        <Image src={ingredients} rounded fluid></Image>
                    </Col>
                </Row>
            </Container> */}
            <Container>
                <Row className="justify-content-md-center">
                    <Col id="column">
                        <Search text="Search for recipes" button="go" onChange={handleRecipeFilter} onSubmit={handleRecipeSubmit}/>
                        <div class="recipes">
                            {recipes !== [] && recipes.map(recipe => <Recipe key={recipe.label} recipe={recipe} />)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;