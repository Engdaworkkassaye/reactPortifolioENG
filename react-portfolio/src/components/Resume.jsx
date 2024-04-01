import React from 'react';

const Resume = () => {
  return (
    <div>
      <header>
        <h1>Resume</h1>
      </header>
      <section>
        <h2>Summary</h2>
        <p>Summary of your professional experience and career objectives.</p>
      </section>
      <section>
        <h2>Experience</h2>
        <div>
          <h3>Company Name</h3>
          <p>Position: Job Title</p>
          <p>Date: Start Date - End Date</p>
          <p>Description of responsibilities and achievements</p>
        </div>
        <div>
        </div>
      </section>
      <section>
        <h2>Education</h2>
        <div>
          <h3>University Name</h3>
          <p>Degree: Bachelor's/Master's</p>
          <p>Date: Start Date - End Date</p>
        </div>
        <div>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2024 Engdawork Kassaye</p>
      </footer>
    </div>
  );
};

export default Resume;
