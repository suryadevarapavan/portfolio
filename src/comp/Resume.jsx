import React from "react";

function Resume() {
  return (
    <div style={{ width: "100%", height: "100vh", padding: "20px" }}>
      <iframe
        src="/sample.pdf"
        title="Resume PDF"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}

export default Resume;
