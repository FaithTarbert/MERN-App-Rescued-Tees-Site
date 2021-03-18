const mongoose = require('mongoose');

const teeSchema = new mongoose.Schema({
    title: String,
    description: String,
    artist: String,
    image: String,
});

module.exports = mongoose.model('Tee', teeSchema);