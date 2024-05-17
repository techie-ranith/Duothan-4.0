const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    test: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Item', itemSchema);
