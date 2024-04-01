import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-3 fixed-bottom">
      <div className="container">
        <p className="text-light mb-0">Connect with me:</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item"><a href="https://github.com/Engdaworkkassaye" target="_blank" className="text-light me-3">GitHub</a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/engdawork-kassaye-23b7a559/" target="_blank" className="text-light me-3">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
