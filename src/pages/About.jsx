
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../comp/Navbar.jsx";
import Card from "../comp/Card.jsx";
import End from "../comp/End.jsx";
import TechnicalSkills from "../comp/TechnicalSkills.jsx";

function About() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* Total pages adjusted to ensure End appears properly */}
      <Parallax pages={4.5} style={{ top: 0, left: 0 }}>
        {/* Sticky Navbar (visible through all pages) */}
        <ParallaxLayer sticky={{ start: 0, end: 4 }}>
          <Navbar />
        </ParallaxLayer>

        {/* About Card section */}
        <ParallaxLayer offset={0} speed={0.8}>
          <div style={{ minHeight: "100vh" }}>
            <Card />
          </div>
        </ParallaxLayer>

        {/* Smooth scroll spacer */}
        <ParallaxLayer offset={1.2} speed={0.4}>
          <div style={{ minHeight: "50vh" }} />
        </ParallaxLayer>

        {/* Technical Skills section */}
        <ParallaxLayer offset={2} speed={0.6}>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TechnicalSkills />
          </div>
        </ParallaxLayer>

        {/* Final End section */}
        <ParallaxLayer offset={3.6} speed={1}>
          <End />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
