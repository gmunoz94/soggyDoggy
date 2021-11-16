import './App.css';
import Linkbar from './components/Linkbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footbar from './components/Footbar';
import { Col, Container, Row } from 'react-bootstrap';


function App() {

  

  return (
    <div className="App">
      <Linkbar />
      <Container fluid>
        <Row>
          <Col>Placeholder</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
      <Footbar />
    </div>
  );
}

export default App;
