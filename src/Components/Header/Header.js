import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
      <nav>
        <Navbar className='nav-bar'>
          <Container>
            <Navbar.Brand className=' text-warning' href="#home">Food Store</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link className='nav-text' href="#home">Home</Nav.Link>
              <Nav.Link className='nav-text' href="#features">Features</Nav.Link>
              <Nav.Link className='nav-text' href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </nav>
    );
};

export default Header;