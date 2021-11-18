import React from "react";
import { Container, Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import '../styles/Services.css'
import soggyDogs from "../assets/soggyDogs.jpeg"

const Contact = () => {

  return (
    <div className="priceBG">
      <img className="heroImg" src={soggyDogs} alt="price"/>
      <Container>
        <h2>Contact Me</h2>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Enter Email" />
                </Form.Group>
            </Row>

            <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-3">
                <Form.Control
                as="textarea"
                placeholder="Your message here"
                style={{ height: '100px' }}
                />
            </FloatingLabel>

            <Button variant="primary" type="submit" className="mb-3">
                Submit
            </Button>
            </Form>
      </Container>
    </div>
  );
};

export default Contact;