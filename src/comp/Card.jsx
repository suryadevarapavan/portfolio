import React from "react"
import "./Card.css"

function Card() {
  return(

<div className="parent">
  <div className="div1">
   <img src="/pic.png" alt="Profile" />
  </div>

  <div className="div2">
<p>Final-year B.Tech student in Information Technology with hands-on experience in web development, systems programming, and security tooling. Skilled in building full-stack applications using Python, Go, JavaScript, and SQL, with additional exposure to cloud platforms and AI/ML model fine-tuning. Actively engaged in problem-solving through coding practice to improve efficiency and debugging skills. Looking to apply technical knowledge, project experience, and continuous learning mindset to contribute to impactful real-world software projects in a professional environment.
</p>
  </div>

  <div className="div3">
    <p>
I have earned a 50-day streak badge on LeetCode and solved over 100 coding problems, strengthening my problem-solving and algorithmic skills. I also set up a personal homelab to automate proxychains and test web applications in a controlled environment. In addition, I completed certifications in Threat Intelligence, Generative AI, and Data Visualization to expand my technical knowledge.
    </p>
  </div>

  <div className="div4">
    <p>
      Currently developing CELENX, a cloud-infused, GPU-accelerated, pixel-forged gaming experience that bends reality with every frame, engineered to challenge players and entertain at scale.
    </p>
  </div>
</div>
)
}

export default Card;
