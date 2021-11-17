import React from "react";
import { Col, Row, Container } from 'react-bootstrap';
import "../styles/Home.css"
import homepageIMG from "../assets/homeIMG.png"
import towelIMG from "../assets/towelDog.png"


const Home = () => {

  return (
    <div className="priceBG">
      <div>
        <img className="homeHero" src={homepageIMG} alt="price"/>
        <p className="heroText">Soggy Doggy Mobile Grooming Salon!!</p>
      </div>
      <Container>
        <img className="towelDog" src={towelIMG} />
        <Row className="homeText">
          <h3>All-Inclusive Spa Experience</h3>
          <p>Each pet is treated to </p>
        </Row>
      </Container>
    </div>
  );
};
export default Home;

