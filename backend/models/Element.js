const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    enum: ['solid', 'liquid', 'gas']
  },
  temperature: {
    type: String,
    required: true,
    enum: ['cold', 'neutral', 'warm']
  }
});

module.exports = mongoose.model('Element', elementSchema);