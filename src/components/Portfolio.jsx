import React from 'react';
import textEditor from '../assets/textEditor.png'; 
import rm from '../assets/rm.png'; 
import sm from '../assets/sm.jpg'; 
import wa from '../assets/wa.png'; 
import lg from '../assets/lg.png'; 
import ca from '../assets/ca.png'; 
const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: 'JATE',
      description: 'JATE is a text editor application built using Express.js and HTML. It provides a simple yet powerful interface for editing text files with features such as syntax highlighting, file management, and more.',
            githubLink: 'https://github.com/Engdaworkkassaye/texteditorENG',
      imageUrl: textEditor, 
    },
    {
      id: 2,
      title: 'Logo generator',
      description: 'Logo Generator is a web application that allows users to create custom logos for their businesses or projects. It offers a range of design options, fonts, and colors to suit any branding needs.',
            githubLink: 'https://github.com/Engdaworkkassaye/LogogeneratorEngda',
      imageUrl: lg, 
    },
    {
      id: 3,
      title: 'Readme Generator',
      description: 'Readme Generator is a command-line tool that automates the process of generating README files for GitHub repositories. It saves time and ensures consistency in documentation across projects.',
            githubLink: 'https://github.com/Engdaworkkassaye/ReadmegeneratorEngda',
      imageUrl: rm, 
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Weather App is a web application that provides real-time weather information for any location. It fetches data from a weather API and displays it in a user-friendly interface with forecasts, temperature trends, and more.',
            githubLink: 'https://github.com/Engdaworkkassaye/Weatherapi',
      imageUrl: wa, 
    },
    {
      id: 5,
      title: 'Social Media Mini App',
      description: 'Social Media Mini App is a small-scale social networking platform where users can create profiles, connect with friends, share updates, and interact with posts. It offers a streamlined experience for staying connected online.',
            githubLink: 'https://github.com/Engdaworkkassaye/mongochallengeENG',
      imageUrl: sm, 
    },
    {
      id: 6,
      title: 'Employee Database',
      description: 'eCommerce App is a full-fledged online marketplace where users can browse products, add them to cart, and make purchases securely. It includes features such as user authentication, product search, and payment processing.',
            githubLink: 'https://github.com/Engdaworkkassaye/ecommerceENG',
      imageUrl: ca, 
    },
  ];

  return (
    <div>
      <header>
        <h1>Portfolio</h1>
      </header>
      <section>
      
        <div className="card-container">
          {projects.map(project => (
            <div key={project.id} className="card">
              <img src={project.imageUrl} alt="Project" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="button-container">
                <a href={project.githubLink} target="_blank" className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
