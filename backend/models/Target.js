const mongoose  = require('mongoose')

const targetScheme = new mongoose.Scheme({
    name: String,
    recipie: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipie' }],
    description: String
})

module.exports = mongoose.model('Target', targetScheme);
