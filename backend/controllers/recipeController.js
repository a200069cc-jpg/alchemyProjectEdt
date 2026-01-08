const Recipe = require('../models/Recipe');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('elements');
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('elements');
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new recipe
exports.createRecipe = async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    elements: req.body.elements
  });

  try {
    const newRecipe = await recipe.save();
    const populatedRecipe = await Recipe.findById(newRecipe._id).populate('elements');
    res.status(201).json(populatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update recipe
exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (req.body.name) recipe.name = req.body.name;
    if (req.body.elements) recipe.elements = req.body.elements;

    const updatedRecipe = await recipe.save();
    const populatedRecipe = await Recipe.findById(updatedRecipe._id).populate('elements');
    res.json(populatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    await recipe.deleteOne();
    res.json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};