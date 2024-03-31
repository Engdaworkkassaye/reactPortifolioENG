import React, { useState } from 'react';
import "../App.css"

function Header({ brandName, imageSrcPath, navItems }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-1"> 
            {navItems.map((item, index) => (
              <li key={index} className={`nav-item ${index === selectedItem ? 'selected' : ''}`}>
                <a 
                  className="nav-link" 
                  href="#" 
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
