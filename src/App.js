import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacs" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>

        <Footer />
          </BrowserRouter>

  );
}
