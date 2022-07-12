import React from "react";
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
        <NavMenu />
        <ScrollToTop />
              <Router>

          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Router>

        <Footer />
          </BrowserRouter>

  );
}
