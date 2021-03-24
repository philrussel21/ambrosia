import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../assets/svg/Ambrosia.svg';



export default function AppNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
            </Link>
          <Link to="/categories" className="nav-link">
            Categories
            </Link>
          <Link to="/ingredients" className="nav-link">
            Ingredients
            </Link>
          <Link to="/non-alcoholic" className="nav-link">
            Non-Alcoholic
            </Link>
          <Link to="/surprise-me" className="nav-link">
            Surprise Me!
            </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>

    </Navbar>
  );
}
