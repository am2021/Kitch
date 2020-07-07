import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import logo from "../img/logo.svg"
import facebook from "../img/icons8-facebook.svg"
import instagram from "../img/icons8-instagram.svg"
import twitter from "../img/icons8-twitter.svg"
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



const Navigation = () => {
    
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                {/* need to fix collapse so that icons collapse properly */}
                <NavbarCollapse>
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <img
                                src={facebook}
                                class="filter-white"
                                alt="Facebook"
                            />
                        </Nav.Link>
                        <Nav.Link>
                            <img
                                src={instagram}
                                class="filter-white"
                                alt="Instagram"
                            />
                        </Nav.Link>
                        <Nav.Link>
                            <img
                                src={twitter}
                                class="filter-white"
                                alt="Twitter"
                            />
                        </Nav.Link>
                    </Nav>
                </NavbarCollapse>
                <NavbarBrand href="#">
                    <img
                        src={logo}
                        width='50'
                        height='50'
                        className="d-inline-block align-bottom"
                        alt="Kitch Logo"
                    />{' '}
                    for sharing
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation