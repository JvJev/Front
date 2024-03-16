// Header.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Pexels Image Gallery</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
