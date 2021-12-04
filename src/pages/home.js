import React from "react";
import { Row } from 'react-bootstrap';
import "../styles/Home.css"
import homepageIMG from "../assets/homeIMG.png"
import pricingIMG from '../assets/pricedIMG.jpeg'


const Home = () => {

  return (
    <div className="priceBG">
      <div>
        <img className="homeHero" src={homepageIMG} alt="Soggy Doggy Dogs"/>
      </div>
      <div>
        <img className="towelDog" src={pricingIMG} alt="Soggy Doggy Mobile Van"/>
        <Row className="homeText">
          <h3>All-Inclusive Spa Experience</h3>
          <p>A bath, nail trim, and ear cleaning is included with EVERY grooming/bathing package.</p>
        </Row>
      </div>
    </div>
  );
};
export default Home;

