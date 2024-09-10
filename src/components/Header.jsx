import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <section>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Contact</Navbar.Brand>
          <Nav>
            <Nav.Link href="/main">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Messages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </section>
    </>
  )
}

export default Header