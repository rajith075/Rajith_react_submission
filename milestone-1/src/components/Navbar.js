import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar({ cart }) {
  return (
    <BootstrapNavbar bg="light" expand="lg" sticky="top">
      <BootstrapNavbar.Brand as={Link} to="/">
        <img src="/logo.png" alt="Ideal Café" width="50" />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          <Nav.Link href="#">Offers</Nav.Link>
          <Nav.Link href="#">Locations</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
          <Nav.Link href="#">Sign In</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search ice creams" className="me-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="#">Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;