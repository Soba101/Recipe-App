import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  const [title, setTitle] = useState("");
  const [serves, setServes] = useState({ min: "", max: "" });
  const [ingredients, setIngredients] = useState([
    { item: "", quantity: "", unit: "" },
  ]);
  const [method, setMethod] = useState("");
  const [notes, setNotes] = useState("");
  const [typeOfFood, setTypeOfFood] = useState("");
  const [tried, setTried] = useState(false);
  const [tested, setTested] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [filterCourse, setFilterCourse] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentRecipeId, setCurrentRecipeId] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/recipes");
      setRecipes(response.data);
      const uniqueCourses = [
        ...new Set(response.data.map((recipe) => recipe.typeOfFood)),
      ].sort();
      setCourses(uniqueCourses);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, { item: "", quantity: "", unit: "" }]);
  };

  const removeIngredientField = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleIngredientChange = (index, event) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [event.target.name]: event.target.value };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const recipeData = {
      title,
      serves: { min: Number(serves.min), max: Number(serves.max) },
      ingredients,
      method,
      notes,
      typeOfFood,
      tried,
      tested,
    };

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5001/api/recipes/${currentRecipeId}`, recipeData);
      } else {
        await axios.post("http://localhost:5001/api/recipes", recipeData);
      }
      fetchRecipes();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating recipe:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setServes({ min: "", max: "" });
    setIngredients([{ item: "", quantity: "", unit: "" }]);
    setMethod("");
    setNotes("");
    setTypeOfFood("");
    setTried(false);
    setTested(false);
    setIsEditing(false);
    setCurrentRecipeId(null);
  };

  const editRecipe = (recipe) => {
    setTitle(recipe.title);
    setServes(recipe.serves);
    setIngredients(recipe.ingredients);
    setMethod(recipe.method);
    setNotes(recipe.notes);
    setTypeOfFood(recipe.typeOfFood);
    setTried(recipe.tried);
    setTested(recipe.tested);
    setIsEditing(true);
    setCurrentRecipeId(recipe._id);
  };

  const deleteRecipe = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        console.log(`Deleting recipe with id: ${id}`);
        await axios.delete(`http://localhost:5001/api/recipes/${id}`);
        setRecipes(recipes.filter(recipe => recipe._id !== id));
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  };

  return (
    <div className="recipes container">
      <h2>Recipes</h2>
      <form onSubmit={handleFormSubmit} className="mb-4">
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
          <label htmlFor="serves">Serves:</label>
          <input
            type="number"
            className="form-control"
            id="servesMin"
            value={serves.min}
            onChange={(e) => setServes({ ...serves, min: e.target.value })}
            placeholder="Min"
          />
          <input
            type="number"
            className="form-control"
            id="servesMax"
            value={serves.max}
            onChange={(e) => setServes({ ...serves, max: e.target.value })}
            placeholder="Max"
          />
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
                type="number"
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
          <label htmlFor="method">Instructions:</label>
          <textarea
            className="form-control"
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            placeholder="Describe the instructions"
            required
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="notes">Notes:</label>
          <textarea
            className="form-control"
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes (optional)"
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="typeOfFood">Type of Food:</label>
          <input
            type="text"
            className="form-control"
            id="typeOfFood"
            value={typeOfFood}
            onChange={(e) => setTypeOfFood(e.target.value)}
            placeholder="Enter type of food"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="tried">Tried:</label>
          <input
            type="checkbox"
            className="form-check-input"
            id="tried"
            checked={tried}
            onChange={(e) => setTried(e.target.checked)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="tested">Tested:</label>
          <input
            type="checkbox"
            className="form-check-input"
            id="tested"
            checked={tested}
            onChange={(e) => setTested(e.target.checked)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>
      <div className="form-group mb-4">
        <label htmlFor="filterCourse">Filter by Type of Food:</label>
        <select
          className="form-control"
          id="filterCourse"
          onChange={(e) => setFilterCourse(e.target.value)}
        >
          <option value="">All</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <h3>Recipe List</h3>
      <ul className="list-group">
        {recipes
          .filter(
            (recipe) => !filterCourse || recipe.typeOfFood === filterCourse
          )
          .map((recipe, index) => (
            <li key={index} className="list-group-item">
              <h4>{recipe.title}</h4>
              <p>
                <strong>Serves:</strong> {recipe.serves.min} -{" "}
                {recipe.serves.max}
              </p>
              <p>
                <strong>Type of Food:</strong> {recipe.typeOfFood}
              </p>
              <p>
                <strong>Ingredients:</strong>
              </p>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>
                    {ingredient.quantity} {ingredient.unit} {ingredient.item}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Instructions:</strong> {recipe.method}
              </p>
              <p>
                <strong>Notes:</strong> {recipe.notes}
              </p>
              <p>
                <strong>Tried:</strong> {recipe.tried ? "Yes" : "No"}
              </p>
              <p>
                <strong>Tested:</strong> {recipe.tested ? "Yes" : "No"}
              </p>
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
};

export default Recipes;
