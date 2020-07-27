import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = ({ text, button }) => {
    return(
        <div>
            <InputGroup>
                <FormControl placeholder={text} />
                
                <InputGroup.Append>
                    <Button variant="outline-secondary">{button}</Button>
                </InputGroup.Append>    
            </InputGroup>
        </div>
    )
}

export default Search