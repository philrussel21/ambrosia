import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../assets/svg/Ambrosia.svg';


export default function AppNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavClick = () => {
    setIsExpanded(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" expanded={isExpanded}>
      <Link to="/">
        <Navbar.Brand>
          <img
            alt="Ambrosia"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        Ambrosia
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={handleNavClick}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/categories" onClick={handleNavClick}>
            Categories
            </Nav.Link>
          <Nav.Link as={Link} to="/ingredients" onClick={handleNavClick}>
            Ingredients
            </Nav.Link>
          <Nav.Link as={Link} to="/non-alcoholic" onClick={handleNavClick}>
            Non-Alcoholic
            </Nav.Link>
          <Nav.Link as={Link} to="/surprise-me" onClick={handleNavClick}>
            Surprise Me!
            </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>

    </Navbar>
  );
}
