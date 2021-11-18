import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Pricing.css'
import towelIMG from "../assets/towelDog.png"

const Pricing = () => {

  return (
    <div className="priceBG">
      <img className="heroImg" src={towelIMG} alt="price"/>
      <Container>
        <Row>
            <Col>Pricing</Col>
            <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};
export default Pricing;