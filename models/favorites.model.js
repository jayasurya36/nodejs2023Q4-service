const mongoose = require('mongoose');
const uuid = require('uuid');
const favoritesSchema = mongoose.Schema({
    artists:[String],
    albums : [String],
    tracks : [String]
})

module.exports = mongoose.model('FavoritesSchema' , favoritesSchema)