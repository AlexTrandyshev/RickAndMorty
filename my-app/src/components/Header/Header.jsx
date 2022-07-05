import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header = () => (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand  href="#home">Rick And Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Character</Nav.Link>
                    <Nav.Link href="#features">Location</Nav.Link>
                    <Nav.Link href="#pricing">Episode</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)