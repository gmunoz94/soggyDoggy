import React from "react";
import { Container } from 'react-bootstrap';
import '../styles/Services.css'
import soggyDogs from "../assets/soggyDogs.jpeg"

const Services = () => {

  return (
    <div className="priceBG">
      <img className="heroImg" src={soggyDogs} alt="price"/>
      <Container>
        <h2>Services</h2>
        
      </Container>
    </div>
  );
};

export default Services;