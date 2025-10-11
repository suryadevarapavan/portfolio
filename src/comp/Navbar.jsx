import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/projects">PROJECTS</Link>
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"> RESUME </a>
    </div>
  );
}

export default Navbar;
