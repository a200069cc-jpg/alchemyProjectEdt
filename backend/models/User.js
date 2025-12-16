const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    totalWins: Number,
    totalLosses: Number
});

module.exports = mongoose.model('User', userSchema);

