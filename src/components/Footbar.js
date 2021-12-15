import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Footbar() {

    return(
        <div className="footer">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>Soggy Doggy Mobile LLC.</Navbar.Brand>
                <Navbar.Text>San Antonio, TX</Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
};

export default Footbar;