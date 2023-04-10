const uuid = require('uuid')
const mongoose = require('mongoose');
const trackSchema = mongoose.Schema({
    _id: { type: String, default: ()=>uuid.v4() },
    name: { type: String, required: true },
    artistId : { type: String, default : null},
    albumId : { type: Number , default : null},
    duration : {type : Number , required : true}
});

module.exports = mongoose.model('Track', trackSchema);