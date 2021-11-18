import './App.css';
import Linkbar from './components/Linkbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footbar from './components/Footbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import MeetMon from './pages/meet-mon';
import Contact from './pages/contact';


function App() {

  

  return (
    <div className="App">
      <Router>
      <Linkbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/meet-monika">
        <MeetMon />
      </Route>
      <Route exact path="/contact-me">
        <Contact />
      </Route>
      <Footbar />
      </Router>
    </div>
  );
}

export default App;
