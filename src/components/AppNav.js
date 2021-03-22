import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logo from '../assets/svg/Ambrosia.svg'



export default function AppNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="Ambrosia"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Ambrosia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Categories</Nav.Link>
          <Nav.Link href="#pricing">Ingredients</Nav.Link>
          <Nav.Link href="#pricing">Non-Alcoholic</Nav.Link>
          <Nav.Link href="#pricing">Suprise Me!</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>

    </Navbar>

    // ----------
  )
}
