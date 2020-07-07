import React from 'react';
import { Jumbotron } from 'react-bootstrap'

const Message = () => {
    return(
        <Jumbotron>
            <div class="centering">
                <h1>Welcome to Kitch!</h1>
                <p>
                    Kitch is the recipe app for sharing! Here you can find recipes to fit within your diet and the ingredients that make them up!
                </p>
            </div>
        </Jumbotron>
    )
}

export default Message