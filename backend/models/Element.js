const mongoose  = require('mongoose')

const elementScheme = new mongoose.Scheme({
    atomicNumber: Number,
    symbol: String,
    name: String,
    state: String,
    description: String,
    discovered: Boolean
})

module.exports = mongoose.model('Element', elementScheme);
