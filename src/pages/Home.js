import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import ingredients from "../img/ingredients.png"
import cooking from "../img/cooking.png"
import Message from '../components/Message'
import Search from '../components/Search'

const Home = () => {
    const axios = require("axios");
    const [ recipes, setRecipes ] = useState([])
    const [ recipeFilter, setRecipeFilter ] = useState('')
    var self = this;
    

    const handleRecipeFilter = (event) => {
        setRecipeFilter(event.target.value)
    }

    const handleRecipeSubmit = (event) => {
        event.preventDefault()

        if(recipeFilter.length < 1) {
            console.log("nothing")
        } else {
            axios({
                "method":"GET",
                "url":"https://edamam-recipe-search.p.rapidapi.com/search",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"edamam-recipe-search.p.rapidapi.com",
                "x-rapidapi-key":"903c62b802msh6ebe5f0e5deed15p17b2b6jsn8271aca746af",
                "useQueryString":true
                },"params":{
                "q":"chicken"
                }
                })
                .then((response)=>{
                  console.log(response);
                })
                .catch((error)=>{
                  console.log(error)
                })
        }
    }
    


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
            <Container>
                <Row className="justify-content-md-center">
                    <Col id="column">
                        <Search text="Search for recipes" button="go" handleFilterChange={handleRecipeFilter} handleSubmit={handleRecipeSubmit}/>
                    </Col>
                    <Col id="column">
                        {/* <Search text="Search for ingredients" button="go"/> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home