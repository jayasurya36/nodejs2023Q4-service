const uuid = require('uuid')
const mongoose = require('mongoose');
const trackSchema = mongoose.Schema({
    _id: { type: String, default: uuid.v4() },
    name: { type: String, required: true },
    artistId : { type: String, default : null},
    albumId : { type: Number}
});

module.exports = mongoose.model('TrackSchema', trackSchema);