// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';



const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" component={AboutMe} />
            <Route path="/about" component={AboutMe} />
      
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
