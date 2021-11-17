import React from "react";
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../styles/Pricing.css'
import pricingIMG from '../assets/priceIMG.png'

const Pricing = () => {

  return (
    <div className="priceBG">
      <img className="heroImg" src={pricingIMG} alt="price"/>
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