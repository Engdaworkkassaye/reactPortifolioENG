import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Import Bootstrap components
import "../App.css";

function Header({ brandName, imageSrcPath, navItems }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="md" bg="white" variant="light" className="shadow" expanded={expanded}>
      <Container>
        <Link className="navbar-brand" to="/" onClick={handleSelect}>
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <Nav.Item key={index} onClick={handleSelect}>
                <Link 
                  className="nav-link" 
                  to={`/${item.toLowerCase()}`} 
                >
                  {item}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
