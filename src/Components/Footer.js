// Footer.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Container>
        <Navbar.Text>© 2023 Pexels Image Gallery. All rights reserved.</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
