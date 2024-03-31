import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/about">About Me</Link></li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
