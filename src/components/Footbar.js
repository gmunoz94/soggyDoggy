import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Footbar() {

    return(
        <div className="footer">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>Soggy Doggy Mobile LLC.</Navbar.Brand>
                <Navbar.Text>San Antonio, TX (210) 584-5743</Navbar.Text>
                </Container>
            </Navbar>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Text>Hours</Navbar.Text>
                <Navbar.Text>Mon 9am-5pm</Navbar.Text>
                <Navbar.Text>Tues 9am-5pm</Navbar.Text>
                <Navbar.Text>Wed 9am-5pm</Navbar.Text>
                <Navbar.Text>Thur 9am-5pm</Navbar.Text>
                <Navbar.Text>Fri 9am-5pm</Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
};

export default Footbar;