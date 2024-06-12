const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Middleware to get recipe by ID
async function getRecipe(req, res, next) {
  let recipe;
  try {
    recipe = await Recipe.findById(req.params.id);
    if (recipe == null) {
      return res.status(404).json({ message: 'Cannot find recipe' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.recipe = recipe;
  next();
}

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one recipe
router.get('/:id', getRecipe, (req, res) => {
  res.json(res.recipe);
});

// Create one recipe
router.post('/', async (req, res) => {
  const recipe = new Recipe({
    title: req.body.title,
    serves: req.body.serves,
    ingredients: req.body.ingredients,
    method: req.body.method,
    notes: req.body.notes,
    typeOfFood: req.body.typeOfFood,
    tried: req.body.tried,
    tested: req.body.tested
  });
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one recipe
router.put('/:id', getRecipe, async (req, res) => {
  if (req.body.title != null) {
    res.recipe.title = req.body.title;
  }
  if (req.body.serves != null) {
    res.recipe.serves = req.body.serves;
  }
  if (req.body.ingredients != null) {
    res.recipe.ingredients = req.body.ingredients;
  }
  if (req.body.method != null) {
    res.recipe.method = req.body.method;
  }
  if (req.body.notes != null) {
    res.recipe.notes = req.body.notes;
  }
  if (req.body.typeOfFood != null) {
    res.recipe.typeOfFood = req.body.typeOfFood;
  }
  if (req.body.tried != null) {
    res.recipe.tried = req.body.tried;
  }
  if (req.body.tested != null) {
    res.recipe.tested = req.body.tested;
  }
  try {
    const updatedRecipe = await res.recipe.save();
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one recipe
router.delete('/:id', getRecipe, async (req, res) => {
  try {
    await res.recipe.deleteOne(); // Use deleteOne instead of remove
    res.json({ message: 'Deleted Recipe' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;