import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap'
import logo from "../images/logo.svg"


const Navigation = () => {
    
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <NavbarBrand className="mx-auto">
                    <img
                        src={logo}
                        width='50'
                        height='50'
                        className="d-inline-block align-bottom"
                        alt="Kitch Logo"
                    />
                    for sharing
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Navigation