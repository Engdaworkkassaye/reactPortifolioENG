import React from 'react';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of project 1',
      demoLink: '#',
      githubLink: '#',
      imageUrl: 'https://via.placeholder.com/300x200', 
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of project 2',
      demoLink: '#',
      githubLink: '#',
      imageUrl: 'https://via.placeholder.com/300x200', 
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description of project 3',
        demoLink: '#',
        githubLink: '#',
        imageUrl: 'https://via.placeholder.com/300x200', 
      },
      {
        id: 4,
        title: 'Project 4',
        description: 'Description of project 4',
        demoLink: '#',
        githubLink: '#',
        imageUrl: 'https://via.placeholder.com/300x200', 
      },
      {
        id: 5,
        title: 'Project 5',
        description: 'Description of project 5',
        demoLink: '#',
        githubLink: '#',
        imageUrl: 'https://via.placeholder.com/300x200', 
      },
      {
        id: 6,
        title: 'Project 6',
        description: 'Description of project 6',
        demoLink: '#',
        githubLink: '#',
        imageUrl: 'https://via.placeholder.com/300x200', 
      },
  ].slice(0, 6); 

  return (
    <div>
      <header>
        <h1>Portfolio</h1>
      </header>
      <section>
        <h2>Projects</h2>
        <div className="card-container">
          {projects.map(project => (
            <div key={project.id} className="card">
              <img src={project.imageUrl} alt="Project" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="button-container">
                <a href={project.demoLink} className="btn btn-primary">Demo</a>
                <a href={project.githubLink} className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
