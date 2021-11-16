import './App.css';
import Linkbar from './components/Linkbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footbar from './components/Footbar';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {

  

  return (
    <div className="App">
      <Router>
      <Linkbar />
      <Container fluid>
        <Row>
          <Col>Placeholder</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
      <Footbar />
      </Router>
    </div>
  );
}

export default App;
