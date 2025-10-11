import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "../comp/Header";
import Navbar from "../comp/Navbar";
import Sintro from "../comp/Sintro";
import End from "../comp/End";
import Contact from "../comp/Contact";

function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Parallax pages={4} style={{ top: 0, left: 0 }}>
        <ParallaxLayer offset={0} speed={1}>
          <div>
            <Navbar />
            <Header />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={1}>
          <Sintro />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}   style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
          <Contact />
        </ParallaxLayer>
        
        <ParallaxLayer offset={3} speed={1}>
         <End />
         </ParallaxLayer>
         </Parallax>
        </div>
  );
}

export default Home;
