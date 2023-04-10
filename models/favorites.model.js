const mongoose = require('mongoose');
const favoritesSchema = mongoose.Schema({
    artists:[String],
    albums : [String],
    tracks : [String]
})

module.exports = mongoose.model('Favorites' , favoritesSchema)