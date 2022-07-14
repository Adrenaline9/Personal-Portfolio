import React from "react";
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Main from './Main';
import "./style.css";

const App = () => (
  <div>
   <NavMenu />
   <ScrollToTop />
   <Main />
   <Footer />
  </div>
  )

export default App

