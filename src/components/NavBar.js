import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import foodlogo from "../assets/foodLogo.png"; // Tell webpack this JS file uses this image
import cartIcon from "../assets/cartIcon.png";
import { Noti } from "./Notification";

console.log(foodlogo);

const Styles = styled.div`
  #container {
    margin-bottom: 50px;
    // para separar del navbar
  }

  .navbar {
    background-color: #e87121;
    .logo {
      margin-left: 25px;
    }
    .items {
      margin-left: auto;
      font-weight: bold;
    }
  }

  .navbar-collapse {
    margin-left: 25px;
  }

  .navbar-toggler {
    margin-right: 20px;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;

    &hover: {
      color: black;
    }
  }

  .carrito {
    margin-top: 5px;
    #span {
      position: relative;
      left: -12px;
      top: 5px;
      visibility: shown;
      color: white;
      background: #e60000;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <div id="container">
      <Navbar expand="lg" className="navbar fixed-top">
        <Navbar.Brand className="logo" href="/">
          <img src={foodlogo} alt="logo" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="items">
            <Nav.Item>
              <Nav.Link href="/about">Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={Noti}>Notificacion</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Inicia sesión</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="carrito">
                <a href="/cart">
                  <img src={cartIcon} alt="carrito" width="35px" />
                  <span id="span" className="badge rounded-pill ">
                    1
                  </span>
                </a>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </Styles>
);
