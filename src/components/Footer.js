import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'

export default function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar variant="dark" bg="dark">
        <Container className="foot-cont">
          <NavbarBrand href="https://philantiporda.netlify.app/" target="_blank">
            © Phil Antiporda
          </NavbarBrand>
          <NavbarBrand href="https://github.com/philrussel21/ambrosia" target="_blank">
            Soure Code
          </NavbarBrand>
          <NavbarBrand className="foot-span">
            Created with <a href="https://www.thecocktaildb.com/api.php" target="_blank">thecocktaildb API</a>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}
