import './App.css';
import Linkbar from './components/Linkbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footbar from './components/Footbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';



function App() {

  

  return (
    <div className="App">
      <Router>
      <Linkbar />
      <Route exact path="*">
        <Home />
      </Route>
      <Footbar />
      </Router>
    </div>
  );
}

export default App;
