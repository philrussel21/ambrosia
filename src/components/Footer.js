import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'

export default function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand>Footer</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}
