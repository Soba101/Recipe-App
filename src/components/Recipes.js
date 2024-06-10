// src/components/Recipes.js
import React, { useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(null);

  const addRecipe = (e) => {
    e.preventDefault();
    const newRecipe = { title, ingredients, instructions };
    if (isEditing) {
      const updatedRecipes = recipes.map((recipe, index) =>
        index === currentRecipeIndex ? newRecipe : recipe
      );
      setRecipes(updatedRecipes);
      setIsEditing(false);
      setCurrentRecipeIndex(null);
    } else {
      setRecipes([...recipes, newRecipe]);
    }
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  const editRecipe = (index) => {
    const recipe = recipes[index];
    setTitle(recipe.title);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setIsEditing(true);
    setCurrentRecipeIndex(index);
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipes">
      <h2>Recipes</h2>
      <form onSubmit={addRecipe}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            required
          />
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List the ingredients"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Describe the instructions"
            required
          ></textarea>
        </div>
        <button type="submit">
          {isEditing ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>
      <h3>Recipe List</h3>
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <li key={index} className="recipe-card">
            <h4>{recipe.title}</h4>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <p>
              <strong>Instructions:</strong> {recipe.instructions}
            </p>
            <div className="recipe-actions">
              <button onClick={() => editRecipe(index)} className="edit-btn">
                <i className="fa fa-edit"></i> Edit
              </button>
              <button
                onClick={() => deleteRecipe(index)}
                className="delete-btn"
              >
                <i className="fa fa-trash"></i> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
