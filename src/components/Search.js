import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = ({ text, button, onChange, onSubmit }) => {
    return(
        <div>
            <InputGroup>
                <FormControl placeholder={text} onKeyUp={onChange}/>
                
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={onSubmit}>{button}</Button>
                </InputGroup.Append>    
            </InputGroup>
        </div>
    )
}

export default Search