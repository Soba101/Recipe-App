const express = require('express');
const { body, validationResult } = require('express-validator');
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

// Create one recipe with validation
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('serves.min').isInt({ gt: 0 }).withMessage('Serves min must be a positive integer'),
    body('serves.max').isInt({ gt: 0 }).withMessage('Serves max must be a positive integer'),
    body('ingredients').isArray().withMessage('Ingredients must be an array'),
    body('method').notEmpty().withMessage('Method is required'),
    body('typeOfFood').notEmpty().withMessage('Type of food is required'),
    body('tried').isBoolean().withMessage('Tried must be a boolean'),
    body('tested').isBoolean().withMessage('Tested must be a boolean')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

// Update one recipe with validation
router.put(
  '/:id',
  getRecipe,
  [
    body('title').optional().notEmpty().withMessage('Title is required'),
    body('serves.min').optional().isInt({ gt: 0 }).withMessage('Serves min must be a positive integer'),
    body('serves.max').optional().isInt({ gt: 0 }).withMessage('Serves max must be a positive integer'),
    body('ingredients').optional().isArray().withMessage('Ingredients must be an array'),
    body('method').optional().notEmpty().withMessage('Method is required'),
    body('typeOfFood').optional().notEmpty().withMessage('Type of food is required'),
    body('tried').optional().isBoolean().withMessage('Tried must be a boolean'),
    body('tested').optional().isBoolean().withMessage('Tested must be a boolean')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

// Delete one recipe
router.delete('/:id', getRecipe, async (req, res) => {
  try {
    await res.recipe.deleteOne();
    res.json({ message: 'Deleted Recipe' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
