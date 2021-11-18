import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Footbar() {

    return(
        <div className="footer">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>Soggy Doggy Mobile LLC.</Navbar.Brand>
                <Navbar.Text>San Antonio, TX (210) 777-7316</Navbar.Text>
                </Container>
            </Navbar>
            <Navbar bg="dark" variant="dark">
                <Container className="navHours" style={{justifyContent: "center"}}>
                <Navbar.Text className="navHours">Hours</Navbar.Text>
                <Navbar.Text className="navHours">Mon-Fri 9am-3pm</Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
};

export default Footbar;