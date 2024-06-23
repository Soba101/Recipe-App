const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String }
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true }, // Add index here
  serves: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  ingredients: [ingredientSchema],
  method: { type: String, required: true },
  notes: { type: String },
  typeOfFood: { type: String, required: true },
  tried: { type: Boolean, required: true },
  tested: { type: Boolean, required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
