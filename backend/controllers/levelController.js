const Level = require('../models/Level');

// Get all levels
exports.getAllLevels = async (req, res) => {
  try {
    const levels = await Level.find().populate({
      path: 'recipeId',
      populate: { path: 'elements' }
    }).sort({ levelNumber: 1 });
    res.json(levels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get level by ID
exports.getLevelById = async (req, res) => {
  try {
    const level = await Level.findById(req.params.id).populate({
      path: 'recipeId',
      populate: { path: 'elements' }
    });
    if (!level) {
      return res.status(404).json({ message: 'Level not found' });
    }
    res.json(level);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get level by level number
exports.getLevelByNumber = async (req, res) => {
  try {
    const level = await Level.findOne({ levelNumber: req.params.levelNumber }).populate({
      path: 'recipeId',
      populate: { path: 'elements' }
    });
    if (!level) {
      return res.status(404).json({ message: 'Level not found' });
    }
    res.json(level);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new level
exports.createLevel = async (req, res) => {
  const level = new Level({
    levelNumber: req.body.levelNumber,
    recipeId: req.body.recipeId
  });

  try {
    const newLevel = await level.save();
    const populatedLevel = await Level.findById(newLevel._id).populate({
      path: 'recipeId',
      populate: { path: 'elements' }
    });
    res.status(201).json(populatedLevel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update level
exports.updateLevel = async (req, res) => {
  try {
    const level = await Level.findById(req.params.id);
    if (!level) {
      return res.status(404).json({ message: 'Level not found' });
    }

    if (req.body.levelNumber !== undefined) level.levelNumber = req.body.levelNumber;
    if (req.body.recipeId) level.recipeId = req.body.recipeId;

    const updatedLevel = await level.save();
    const populatedLevel = await Level.findById(updatedLevel._id).populate({
      path: 'recipeId',
      populate: { path: 'elements' }
    });
    res.json(populatedLevel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete level
exports.deleteLevel = async (req, res) => {
  try {
    const level = await Level.findById(req.params.id);
    if (!level) {
      return res.status(404).json({ message: 'Level not found' });
    }
    await level.deleteOne();
    res.json({ message: 'Level deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};