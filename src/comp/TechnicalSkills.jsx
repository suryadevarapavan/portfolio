
// TechnicalSkills.jsx
import React from "react";
import "./TechnicalSkills.css";

function TechnicalSkills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-card">
        <h2 className="skills-title">Technical Skills</h2>

        {/* Languages */}
        <div className="skills-section">
          <h3 className="skills-subtitle">Languages</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="python.svg" alt="Python" />
            </div>
            <div className="icon-link">
              <img src="go.svg" alt="Go" />
            </div>
            <div className="icon-link">
              <img src="javascript.svg" alt="JavaScript" />
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="skills-section">
          <h3 className="skills-subtitle">Databases</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="mysql.svg" alt="MySQL" />
            </div>
            <div className="icon-link">
              <img src="mariadb.svg" alt="MariaDB" />
            </div>
            <div className="icon-link">
              <img src="mongodb.svg" alt="MongoDB" />
            </div>
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className="skills-section">
          <h3 className="skills-subtitle">Tools & Frameworks</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="react.svg" alt="React.js" />
            </div>
            <div className="icon-link">
              <img src="git.svg" alt="Git" />
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="skills-section">
          <h3 className="skills-subtitle">Platforms</h3>
          <div className="icon-grid">
            <div className="icon-link">
              <img src="linux.svg" alt="Linux" />
            </div>
            <div className="icon-link">
              <img src="gitforwindows.svg" alt="Windows" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
