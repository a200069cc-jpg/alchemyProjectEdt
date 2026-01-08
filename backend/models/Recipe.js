const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  elements: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Element',
    required: true
  }]
});

module.exports = mongoose.model('Recipe', recipeSchema);