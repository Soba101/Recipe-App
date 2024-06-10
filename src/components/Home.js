// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Recipe App</h2>
      <p>Your go-to app for delicious recipes! Browse through our collection of recipes, add your own, and enjoy cooking!</p>
      <div className="home-image">
        <img src="/path-to-your-image.jpg" alt="Delicious Food" />
      </div>
    </div>
  );
}

export default Home;