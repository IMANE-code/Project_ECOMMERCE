import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './index.css';


export class Navigation extends Component {
    render() {
        return (
            <div className="container">
            <Navbar collapseOnSelect  expand="lg" bg="none" >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="p-2" to="Produit">Produit</NavLink>
                    <NavLink className="p-2" to="Home">Home</NavLink>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Register</Nav.Link>
                    <Nav.Link to="#memes"> Login</Nav.Link>      
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
            </div>
        )
    }
}

export default Navigation
