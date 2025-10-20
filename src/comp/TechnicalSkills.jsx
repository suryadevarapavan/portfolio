
//TechnicalSkills.jsx
import React from "react";
import "./TechnicalSkills.css";

function TechnicalSkills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-card">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-section">
          <h3 className="skills-subtitle">Languages</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="python.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="icon-link">
              <img src="go.svg" alt="Go" />
              <span>Go</span>
            </div>
            <div className="icon-link">
              <img src="javascript.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="icon-link">
              <img src="html.svg" alt="HTML" />
              <span>HTML</span>
            </div>
            <div className="icon-link">
              <img src="css.svg" alt="CSS" />
              <span>CSS</span>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-subtitle">Databases</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="mysql.svg" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="icon-link">
              <img src="mariadb.svg" alt="MariaDB" />
              <span>MariaDB</span>
            </div>
            <div className="icon-link">
              <img src="mongodb.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="icon-link">
              <img src="postgresql.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-subtitle">Frameworks</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="react.svg" alt="React.js" />
              <span>React.js</span>
            </div>
            <div className="icon-link">
              <img src="git.svg" alt="Git" />
              <span>Git</span>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-subtitle">Platforms</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="linux.svg" alt="Linux" />
              <span>Linux</span>
            </div>
            <div className="icon-link">
              <img src="windows.svg" alt="Windows" />
              <span>Windows</span>
            </div>
            <div className="icon-link">
              <img src="gcloud.svg" alt="Google Cloud" />
              <span>Google Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
