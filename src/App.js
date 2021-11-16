import './App.css';
import Linkbar from './components/Linkbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footbar from './components/Footbar';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';


function App() {

  

  return (
    <div className="App">
      <Router>
      <Linkbar />
      <Container fluid>
        <Row>
            <Col>Home</Col>
            <Col>2 of 2</Col>
        </Row>
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route> */}
      </Container>
      <Footbar />
      </Router>
    </div>
  );
}

export default App;
