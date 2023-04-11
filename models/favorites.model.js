const mongoose = require('mongoose');
const favoritesSchema = mongoose.Schema({
    _id: { type: String },
    artists:{type :  [String]},
    albums: {type :  [String]},
    tracks: {type :  [String]}
})

module.exports = mongoose.model('Favorites', favoritesSchema)