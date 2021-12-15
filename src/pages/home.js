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
      <Container>
        <Row>
          <h1 className="serviceHead">Services</h1>
          <ul className="serviceList1">
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
          </ul>
          <ul className="serviceList2">
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
            <li>
              Bathing
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
};
export default Home;

