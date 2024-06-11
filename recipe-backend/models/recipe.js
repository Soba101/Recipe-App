const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: String, required: true },
  unit: { type: String, required: true }
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cuisine: { type: String, required: true },
  ingredients: [ingredientSchema],
  instructions: { type: String, required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;