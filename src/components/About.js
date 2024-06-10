// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>This app was created to help food enthusiasts find and share their favorite recipes. Whether you're a beginner cook or a seasoned chef, you'll find something here to inspire your next meal.</p>
      <div className="about-image">
        <img src="/path-to-your-image.jpg" alt="Cooking" />
      </div>
    </div>
  );
}

export default About;