// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    async function fetchRecipes() {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    }
    fetchRecipes();
  }, []);
  
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;