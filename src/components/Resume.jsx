import React from 'react';

const ProgressBar = ({ proficiency, percentage, color }) => {
  return (
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%`, backgroundColor: color }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">{proficiency}</div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h2>Resume</h2>
      <p>Download my resume: <a href="./assets/Resume.pdf" download>Download</a></p>
      <div className="row">
        <div className="col-lg-6">
          <div className="card border-primary mb-4">
            <div className="card-body">
              <h3 className="card-title">Proficiencies:</h3>
              <div className="mb-3">
                <ProgressBar proficiency="HTML" percentage={100} color="#f39c12" />
              </div>
              <div className="mb-3">
                <ProgressBar proficiency="CSS" percentage={85} color="#3498db" />
              </div>
              <div className="mb-3">
                <ProgressBar proficiency="JavaScript" percentage={70} color="#27ae60" />
              </div>
              <div className="mb-3">
                <ProgressBar proficiency="TailWind CSS" percentage={100} color="#9b59b6" />
              </div>
              <div className="mb-3">
                <ProgressBar proficiency="Express" percentage={90} color="#e74c3c" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card border-secondary mb-4">
            <div className="card-body">
              <h3 className="card-title">Education:</h3>
              <p>Software Development Student, MOU</p>
              <p>June 2023 - Present</p>
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
    </div>
  );
};

export default Resume;
