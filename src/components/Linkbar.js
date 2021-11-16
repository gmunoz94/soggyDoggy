import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Linkbar() {

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/" className="App-title">Soggy Doggy</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
                <Nav.Link href="/meet-monika">Meet Monika</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
};

export default Linkbar;