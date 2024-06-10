import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [ingredients, setIngredients] = useState([{ item: '', quantity: '', unit: '' }]);
  const [instructions, setInstructions] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentRecipeId, setCurrentRecipeId] = useState(null);
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [cuisines, setCuisines] = useState(['Chinese', 'Western', 'Japanese']);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
      const uniqueCuisines = [...new Set(response.data.map(recipe => recipe.cuisine))];
      setCuisines(uniqueCuisines);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const addRecipe = async (e) => {
    e.preventDefault();
    const newRecipe = { title, cuisine, ingredients, instructions };
    try {
      if (isEditing) {
        const response = await axios.put(`/api/recipes/${currentRecipeId}`, newRecipe);
        setRecipes(recipes.map(recipe => recipe._id === currentRecipeId ? response.data : recipe));
        setIsEditing(false);
        setCurrentRecipeId(null);
      } else {
        const response = await axios.post('/api/recipes', newRecipe);
        setRecipes([...recipes, response.data]);
        if (!cuisines.includes(cuisine)) {
          setCuisines([...cuisines, cuisine]);
        }
      }
      setTitle('');
      setCuisine('');
      setIngredients([{ item: '', quantity: '', unit: '' }]);
      setInstructions('');
    } catch (error) {
      console.error('Error adding/updating recipe:', error);
    }
  };

  const editRecipe = (recipe) => {
    setTitle(recipe.title);
    setCuisine(recipe.cuisine);
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    setIsEditing(true);
    setCurrentRecipeId(recipe._id);
  };

  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`/api/recipes/${id}`);
      setRecipes(recipes.filter(recipe => recipe._id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const handleIngredientChange = (index, event) => {
    const values = [...ingredients];
    values[index][event.target.name] = event.target.value;
    setIngredients(values);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { item: '', quantity: '', unit: '' }]);
  };

  const removeIngredientField = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  const filteredRecipes = selectedCuisine === 'All'
    ? recipes
    : recipes.filter((recipe) => recipe.cuisine === selectedCuisine);

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  return (
    <div className="recipes container">
      <h2>Recipes</h2>
      <form onSubmit={addRecipe} className="mb-4">
        <div className="form-group mb-3">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cuisine">Cuisine:</label>
          <select
            className="form-control"
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            required
          >
            <option value="">Select cuisine</option>
            {cuisines.map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
            <option value="new">Add new cuisine</option>
          </select>
          {cuisine === 'new' && (
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter new cuisine"
              onChange={(e) => setCuisine(e.target.value)}
              required
            />
          )}
        </div>
        <div className="form-group mb-3">
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="d-flex mb-2">
              <input
                type="text"
                className="form-control me-2"
                name="item"
                placeholder="Item"
                value={ingredient.item}
                onChange={(e) => handleIngredientChange(index, e)}
                required
              />
              <input
                type="text"
                className="form-control me-2"
                name="quantity"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, e)}
                required
              />
              <input
                type="text"
                className="form-control me-2"
                name="unit"
                placeholder="Unit"
                value={ingredient.unit}
                onChange={(e) => handleIngredientChange(index, e)}
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeIngredientField(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addIngredientField}
          >
            Add Ingredient
          </button>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            className="form-control"
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Describe the instructions"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </form>

      <div className="mb-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${selectedCuisine === 'All' ? 'active' : ''}`}
              onClick={() => handleCuisineSelect('All')}
            >
              All
            </button>
          </li>
          {cuisines.map((cuisine, index) => (
            <li className="nav-item" key={index}>
              <button
                className={`nav-link ${selectedCuisine === cuisine ? 'active' : ''}`}
                onClick={() => handleCuisineSelect(cuisine)}
              >
                {cuisine}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h3>Recipe List</h3>
      <ul className="list-group">
        {filteredRecipes.map((recipe, index) => (
          <li key={recipe._id} className="list-group-item">
            <h4>{recipe.title}</h4>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.quantity} {ingredient.unit} {ingredient.item}</li>
              ))}
            </ul>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button
              onClick={() => editRecipe(recipe)}
              className="btn btn-warning me-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteRecipe(recipe._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;