import React from "react";
// import testLogo from './logo192.png'
import CheckmateBrand from './newbrand.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
    return (
        <Navbar fixed='top' expand='lg' bg='dark' data-bs-theme='dark' className="py-1 px-1">
            <Navbar.Brand href="#">
                <img src={CheckmateBrand} alt="testing using react logo" width={'30'} height={'30'} className="d-inline-block align-top mx-2" />
                Checkmate
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto">
                <Nav.Link href="#">My Lists</Nav.Link>
                <Nav.Link href='#'>My Account</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation