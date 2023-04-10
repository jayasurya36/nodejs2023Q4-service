const uuid = require('uuid').v4()
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: { type: String, default:()=> uuid.v4() },
    login: { type: String, required: true },
    password : { type: String, required: true }
} , {timestamps : true});

module.exports = mongoose.model('User', userSchema);