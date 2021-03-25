const mongoose = require('mongoose');
// import tees from './tees';

const userSchema = new mongoose.Schema({
    title: String,
    description: String,
    artist: String,
    image: String,
});

module.exports = mongoose.model('User', userSchema);