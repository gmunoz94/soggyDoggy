import React from "react";
import { Container } from 'react-bootstrap';
import '../styles/Services.css'
import soggyDogs from "../assets/soggyDogs.jpeg"

const MeetMon = () => {

  return (
    <div className="priceBG">
      <img className="heroImg" src={soggyDogs} alt="price"/>
      <Container className="underConstruction">
        <h2>Under Construction</h2>
      </Container>
    </div>
  );
};
export default MeetMon;