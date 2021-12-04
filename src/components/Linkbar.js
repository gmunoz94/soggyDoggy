import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function Linkbar() {

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar href="/" className="App-title text-white">Soggy Doggy</Navbar>
                <Nav>
                    <Button className="bookBtn" bg="dark" variant="danger" href="https://booking.moego.pet/go/?name=SoggyDoggy" target="_blank">Book Appointment</Button>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
};

export default Linkbar;