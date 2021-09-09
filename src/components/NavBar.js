import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import foodlogo from '../assets/foodLogo.png'; // Tell webpack this JS file uses this image

console.log(foodlogo);

const Styles = styled.div`
    #container{
        margin-bottom: 50px;
        // para separar del navbar
    }

    .navbar {
        background-color: #E87121;        
        .logo {
            margin-left: 25px;
        }
        .items {
            margin-left: auto;
        }
    }

    .navbar-collapse {
        margin-left: 25px;
    }

    .navbar-toggler {
        margin-right: 20px;
    }

    .navbar-brand, .navbar-nav .nav-link{
        color: white;

        &hover: {
            color: black;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <div id="container">
            <Navbar expand="lg" className="navbar fixed-top">
                <Navbar.Brand className="logo" href="/"><img src={foodlogo} alt="logo" width="150px"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="items">
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contacto</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="">Registrate</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </Styles >
)