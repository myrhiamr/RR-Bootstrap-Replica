import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="path_to_instacart_logo_image"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Instacart Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Sign Up" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Customer</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Driver</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Store</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
