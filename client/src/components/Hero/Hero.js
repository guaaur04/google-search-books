import React from "react";

function Hero({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="hero"
    >
      {children}
      <h1>Google Books Search</h1>
      <h2>Search for and Save Books of Interest</h2>
    </div>
  );
}

export default Hero;
