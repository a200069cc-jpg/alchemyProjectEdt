const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    atomicNumber: Number,
    symbol: String,
    name: String,
    state: String,
    description: String,
    discovered: Boolean
});

module.exports = mongoose.model('Element', elementSchema);
