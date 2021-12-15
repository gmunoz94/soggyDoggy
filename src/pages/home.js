import React from "react";
import { Row, Container } from 'react-bootstrap';
import "../styles/Home.css"
import vanIMG from '../assets/truckIMG.jpg'


const Home = () => {

  return (
    <div className="priceBG">
      <Container className="mt-5">
        <img className="vanImage" src={vanIMG} alt="Soggy Doggy Mobile Grooming Van"/>
        <Row className="homeText">
          <h3>All-Inclusive Spa Experience</h3>
          <p>A bath, nail trim, and ear cleaning is included with EVERY grooming/bathing package.</p>
        </Row>
      </Container>
    </div>
  );
};
export default Home;

