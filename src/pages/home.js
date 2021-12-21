import React from "react";
import { Row, Container } from 'react-bootstrap';
import "../styles/Home.css"
import vanIMG from '../assets/truckIMG.jpg'


const Home = () => {

  return (
    <div className="priceBG">
      <Container className="my-5">
        <img className="vanImage" src={vanIMG} alt="Soggy Doggy Mobile Grooming Van"/>
      </Container>
      <Container className="serviceCont">
        <Row>
          <h1 className="serviceHead">Services</h1>
          <ul className="serviceList list1">
            <li>
              Grooming
            </li>
            <li>
              Bathing
            </li>
            <li>
              Nail Trim
            </li>
            <li>
              Ear Cleaning
            </li>
            <li>
              Anal Glands
            </li>
            <li>
              Nail Filing
            </li>
          </ul>
        </Row>
        <Row>
          <ul className="serviceList list2">
            <li>
              Specialty Shampoos <span className="specText">(Oatmeal, Hypoallergenic, Odor-removing, etc.)</span>
            </li>
            <li>
              Deshedding/Furminator Shampoo & Conditioner
            </li>
            <li>
              Flea & Tick Treatments
            </li>
            <li>
              Toothbrushing
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
};
export default Home;

