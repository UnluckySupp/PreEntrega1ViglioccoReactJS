import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Supermercados América</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link to="/category/bebidas" as={NavLink}>Bebidas</Nav.Link>
            <Nav.Link to="/category/carne" as={NavLink}>Carne</Nav.Link>
            <Nav.Link to="/category/hogar" as={NavLink}>Hogar</Nav.Link>
            <Nav.Link to="/category/merienda" as={NavLink}>Merienda</Nav.Link>
            <Nav.Link to="/category/pastas" as={NavLink}>Pastas</Nav.Link>
            <Nav.Link to="/category/snacks" as={NavLink}>Snacks</Nav.Link>
            <Nav.Link to="/category/verduras" as={NavLink}>Verduras</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>

    </>
  )
}