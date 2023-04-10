const uuid = require('uuid')
const mongoose = require('mongoose');
const artistSchema = mongoose.Schema({
    _id: { type: String, default: uuid.v4() },
    name: { type: String, required: true },
    grammy : { type: Boolean, required: true }
});

module.exports = mongoose.model('ArtistSchema', artistSchema);