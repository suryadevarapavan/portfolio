import React from "react";
import Navbar from "../comp/Navbar.jsx";
import End from "../comp/End";
import Resume from "../comp/Resume.jsx";
import'./Museum.css';

function Museum() {
  return (
    <div className="mu">
      <h1>WELCOME TO RESUME!</h1>
      <Navbar />
      <Resume />
      <End />
    </div>
  );
}

export default Museum;
