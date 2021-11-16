import './App.css';
import Linkbar from './components/Linkbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footbar from './components/Footbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import MeetMon from './pages/meet-mon';
import Pricing from './pages/pricing';


function App() {

  

  return (
    <div className="App">
      <Router>
      <Linkbar />
      <Container fluid>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/meet-monika">
          <MeetMon />
        </Route>
      </Container>
      <Footbar />
      </Router>
    </div>
  );
}

export default App;
