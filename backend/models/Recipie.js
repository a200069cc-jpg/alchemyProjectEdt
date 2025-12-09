const mongoose  = require('mongoose')

const recipieScheme = new mongoose.Scheme({
    name: String,
    elements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Element' }],
})

module.exports = mongoose.model('Recipie', recipieScheme);
