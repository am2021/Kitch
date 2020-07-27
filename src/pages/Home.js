import React from 'react';
import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import ingredients from "../img/ingredients.png"
import cooking from "../img/cooking.png"
import Message from '../components/Message'
import Search from '../components/Search'

const Home = () => {
    // const [ recipes, setRecipes ] = useState([])
    // const [ filter, setFilter ] = useState('')
    

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
                        <Search text="Search for recipes" button="go"/>
                    </Col>
                    <Col id="column">
                        <Search text="Search for ingredients" button="go"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home