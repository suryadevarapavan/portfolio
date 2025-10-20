import React from "react";
import "./Scrolls.css";

function Scrolls() {
  const scrolls = [
    {
      title: "SQUAD – Anonymous Chat Platform",
      description:
        "A privacy-focused real-time chat app enabling temporary conversations without storing personal data. Features a responsive frontend and secure backend logic.",
      tech: "HTML, CSS, JavaScript, MySQL, MariaDB",
      link: "https://github.com/suryadevarapavan/SQUAD",
    },
    {
      title: "Pilli",
      description:
        "A animal like program which works based on intractions.It implements find-s machine learning alogrithm to perform mental health analysis of the concusmer.",
      tech: "C++,arduino uno",
      link: "https://github.com/suryadevarapavan/PILLI",
    },
    {
      title: "Web Scraper",
      description:
        "Automated scraper built with Python for parsing URLs, managing sessions, and downloading multiple files concurrently with robust error handling.",
      tech: "Python, Requests, BeautifulSoup, urllib, concurrent.futures",
      link: "https://github.com/suryadevarapavan/rainbow-dragon",
    },
  ];

  return (
    <div className="scrolls-wrapper">
      <div className="scrolls-card">
        <h2 className="scrolls-title">Scrolls</h2>
        <div className="scrolls-grid">
          {scrolls.map((proj, index) => (
            <div key={index} className="scroll-item">
              <h3 className="scroll-name">{proj.title}</h3>
              <p className="scroll-desc">{proj.description}</p>
              <p className="scroll-tech">
                <strong>Tech Stack:</strong> {proj.tech}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="scroll-link"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scrolls;
