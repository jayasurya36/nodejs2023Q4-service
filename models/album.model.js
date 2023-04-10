const uuid = require('uuid')
const mongoose = require('mongoose');
const albumSchema = mongoose.Schema({
    _id: { type: String, default: uuid.v4() },
    name: { type: String, required: true },
    year : { type: Number, required: true },
    artistId : {type : String , default: null}
});

module.exports = mongoose.model('AlbumSchema', albumSchema);