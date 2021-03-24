import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

export default function Footer() {
  return (
    // <div className="fixed-bottom">
    <div>
      <Navbar variant="dark" bg="dark">
        <Container className="foot-cont">
          <NavbarBrand href="https://philantiporda.netlify.app/" target="_blank" rel="noreferrer">
            © Phil Antiporda
          </NavbarBrand>
          <NavbarBrand href="https://github.com/philrussel21/ambrosia" target="_blank" rel="noreferrer">
            Soure Code
          </NavbarBrand>
          <NavbarBrand className="foot-span">
            Created with <a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noreferrer">thecocktaildb API</a>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}
