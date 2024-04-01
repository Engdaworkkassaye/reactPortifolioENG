import React from 'react';

const ProgressBar = ({ proficiency, percentage }) => {
  return (
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">{proficiency}</div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h2>Resume</h2>
      <p>Download my resume: <a href="/path/to/resume.pdf" download>Download</a></p>
      <div className="row">
        <div className="col-lg-6">
          <h3>Proficiencies:</h3>
          <div className="mb-3">
            <ProgressBar proficiency="HTML" percentage={90} />
          </div>
          <div className="mb-3">
            <ProgressBar proficiency="CSS" percentage={85} />
          </div>
          <div className="mb-3">
            <ProgressBar proficiency="JavaScript" percentage={80} />
          </div>
        </div>
        <div className="col-lg-6">
          <h3>Experience:</h3>
          <div>
            <h4>Company Name</h4>
            <p>Full Stack Developer</p>
            <p>June 2019 - Present</p>
            <ul>
              <li>Developed and maintained web applications using technologies such as HTML, CSS, JavaScript, and React.</li>
              <li>Worked with server-side technologies including Node.js, Express.js, and MongoDB.</li>
              <li>Implemented RESTful APIs for client-server communication.</li>
              <li>Utilized version control systems like Git for collaborative development.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
