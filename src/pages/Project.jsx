import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../comp/Navbar.jsx";
import End from "../comp/End";
import Scrolls from "../comp/Scrolls.jsx";
import Contact from "../comp/Contact";
import './Project.css';

function Project() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Parallax pages={3.5} style={{ top: 0, left: 0 }}>
        
        {/* Navbar + Scrolls */}
        <ParallaxLayer offset={0} speed={1}>
          <div>
            <Navbar />
            <Scrolls />
          </div>
        </ParallaxLayer>

        {/* Contact - moved to offset 1.5 for better spacing */}
        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Contact />
        </ParallaxLayer>

        {/* End */}
        <ParallaxLayer offset={2.5} speed={1}>
          <End />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default Project;
