const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  levelNumber: {
    type: Number,
    required: true,
    unique: true
  },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  }
});

module.exports = mongoose.model('Level', levelSchema);