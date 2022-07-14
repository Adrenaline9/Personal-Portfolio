import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacs" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
     </BrowserRouter>

  );
}
