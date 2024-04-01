import React from 'react';
import logo from '../assets/logo.jpg'; 
import "../App.css";

const About = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} className="about-me-logo img-fluid" alt="Logo" />
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                Hi, I'm Engdawork Kasaye, a passionate full-stack web development student. I specialize in building responsive and user-friendly web applications using modern technologies like React, Node.js, and Express.
              </p>
              <p>
                My journey in web development started 1 years ago when I discovered my passion for coding. Since then, I have been honing my skills and exploring new technologies to stay updated with the latest trends in the industry.
              </p>
              <p>
                Apart from coding, I love to contribute to open-source projects, attend tech meetups, and share my knowledge with the community. In my free time, you can find me experimenting with new technologies, playing video games, or exploring the great outdoors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
