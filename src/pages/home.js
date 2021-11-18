import React from "react";
import { Row, Container } from 'react-bootstrap';
import "../styles/Home.css"
import homepageIMG from "../assets/homeIMG.png"
import pricingIMG from '../assets/priceIMG.png'


const Home = () => {

  return (
    <div className="priceBG">
      <div>
        <img className="homeHero" src={homepageIMG} alt="price"/>
        <p className="heroText">Soggy Doggy Mobile Grooming Salon!!</p>
      </div>
      <Container>
        <img className="towelDog" src={pricingIMG} alt="dogs in bathtub"/>
        <Row className="homeText">
          <h3>All-Inclusive Spa Experience</h3>
          <p>A bath, nail trim, and ear cleaning is included with EVERY grooming/bathing package.</p>
        </Row>
      </Container>
    </div>
  );
};
export default Home;

