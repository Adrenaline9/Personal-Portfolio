
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoPage from "./pages/NoPage";
import NavMenu from "./components/NavMenu";

import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
    <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
 );
}



