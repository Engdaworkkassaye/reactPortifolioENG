import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo.jpg';

const App = () => {
  const brandName = "Engdawork Kassaye";
  const imageSrcPath = logo;
  const navItems = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <Router>
        <Header
          brandName={brandName}
          imageSrcPath={imageSrcPath}
          navItems={navItems}
        />
          <Routes>
            <Route exact path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        <Footer className="mt-auto" /> 
    </Router>
  );
};

export default App;
