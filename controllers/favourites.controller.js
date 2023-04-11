const Favorites = require('../models/favorites.model');
const favController = {}
const modelId = 'favs'
favController.getAll = async (req, res) => {
    try {
       const favs = await Favorites.findById(modelId);
       res.status(200).send(favs);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
favController.postTrack = async (req, res) => {
    try {
        const favs = await Favorites.findById(modelId);
        if(favs.tracks.indexOf(req.params.id) !== (-1)){
            res.status(202).send({msg : "Already in favorites list"})
        }
        await Favorites.findByIdAndUpdate(modelId , {$push : {"tracks" : req.params.id}})
        res.status(200).send({msg : "Success"})
    } catch (err) {
        res.status(500).send(err.message)
    }
}
favController.deleteTrack = async (req , res) =>{
    try{
        const favs = await Favorites.findById(modelId);
        if(!favs || favs.tracks.indexOf(req.params.id) === -1){
            res.status(404).send({msg : "Track not found in the favs"})
        }else{
            await Favorites.findByIdAndUpdate(modelId , {$pull : {"tracks" : req.params.id}});
            res.status(200).send({msg : "Track removed from the favs successfully"});
        }
    }catch(err){
        res.status(500).send(err.message);
    }
}
favController.postAlbum = async (req, res) => {
    try {
        const favs = await Favorites.findById(modelId);
        if(favs.albums.indexOf(req.params.id) !== (-1)){
            res.status(202).send({msg : "Already in favorites list"})
        }
        await Favorites.findByIdAndUpdate(modelId , {$push : {"Albums" : req.params.id}})
        res.status(200).send({msg : "Success"})
    } catch (err) {
        res.status(500).send(err.message)
    }
}
favController.deleteAlbum = async (req , res) =>{
    try{
        const favs = await Favorites.findById(modelId);
        if(!favs || favs.albums.indexOf(req.params.id) === -1){
            res.status(404).send({msg : "Album not found in the favs"})
        }else{
            await Favorites.findByIdAndUpdate(modelId , {$pull : {"albums" : req.params.id}});
            res.status(200).send({msg : "Album removed from the favs successfully"});
        }
    }catch(err){
        res.status(500).send(err.message);
    }
}
favController.postArtist = async (req, res) => {
    try {
        const favs = await Favorites.findById(modelId);
        if(favs.artists.indexOf(req.params.id) !== (-1)){
            res.status(202).send({msg : "Already in favorites list"})
        }
        await Favorites.findByIdAndUpdate(modelId , {$push : {"artists" : req.params.id}})
        res.status(200).send({msg : "Success"})
    } catch (err) {
        res.status(500).send(err.message)
    }
}
favController.deleteArtist = async (req , res) =>{
    try{
        const favs = await Favorites.findById(modelId);
        if(!favs || favs.artists.indexOf(req.params.id) === -1){
            res.status(404).send({msg : "Artist not found in the favs"})
        }else{
            await Favorites.findByIdAndUpdate(modelId , {$pull : {"artists" : req.params.id}});
            res.status(200).send({msg : "Artist removed from the favs successfully"});
        }
    }catch(err){
        res.status(500).send(err.message);
    }
}
favController.isFav = async(req , res , next) =>{
    try{
        let fav = await Favorites.findById(modelId);
        if(!fav){
            fav = new Favorites({
                _id : modelId,
                artists : [],
                albums : [],
                tracks : []
            })
            await fav.save();
            next();
        }else{
            next();
        }
    }catch(err){
        req.send(err.message)
    }
}

module.exports = favController;