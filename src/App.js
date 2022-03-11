
import './App.css';
import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/portfolio" exact>
            <Home />
          </Route>
          <Route path="/portfolio/about">
            <About />
          </Route>
          <Route path="/portfolio/contact">
            <Contact />
          </Route>
          <Route path="/portfolio/projects">
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
