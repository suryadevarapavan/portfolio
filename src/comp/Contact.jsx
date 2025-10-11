
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>
        <div className="icon-grid">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img src="ld.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/suryadevarapavan"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img src="github.png" alt="GitHub" />
          </a>
          <a
            href="https://x.com/general_shi_114"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img src="/x.jpg" alt="X" />
          </a>
          <a
            href="mailto:suryadevarapavan770@gmail.com"
            className="icon-link"
          >
            <img src="mail.jpg" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
