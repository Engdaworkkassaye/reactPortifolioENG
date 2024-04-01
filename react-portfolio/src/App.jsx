import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo.jpg';

const App = () => {
  const brandName = "Engdawork Kassaye";
  const imageSrcPath = logo;
  const navItems = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <Router>
        <Header
          brandName={brandName}
          imageSrcPath={imageSrcPath}
          navItems={navItems}
        />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />


          </Routes>
        <Footer className="mt-auto" /> 
    </Router>
  );
};

export default App;
