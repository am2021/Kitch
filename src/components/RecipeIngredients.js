import React from 'react'
import Alert from 'react-bootstrap/Alert'

const RecipeIngredients = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <ul className="ingredient-list">
                <li>{ingredient.text}</li>
            </ul>
        )
    })
}

export default RecipeIngredients