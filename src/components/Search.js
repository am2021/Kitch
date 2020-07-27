import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = ({ text, button, handleFilterChange, handleSubmit }) => {
    return(
        <div>
            <InputGroup>
                <FormControl placeholder={text} onKeyUp={handleFilterChange}/>
                
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={handleSubmit}>{button}</Button>
                </InputGroup.Append>    
            </InputGroup>
        </div>
    )
}

export default Search