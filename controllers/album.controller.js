const Album = require('../models/album.model');
let albumController = {}
albumController.getAll = async (req, res) => {
    try {
        const album = await Album.find();
        res.status(200).send(album);
    } catch (err) {
        res.status(500).send(err.message)
    }
}
albumController.getById = async (req, res) => {
    try {
        let album = await Album.findOne({ _id: req.params.id });
        if (album === null) { res.status(404).send('Album not found'); }
        else res.status(200).send(artist)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
albumController.createAlbum = async (req, res) => {
    try {
        if (req.body) {
            let album = new Album(req.body)
            const returnVal = await album.save();
            res.status(201).send(returnVal)
        } else {
            res.status(400).send('request body cannot be empty')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}
albumController.updateAlbum = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if(album !== null){
            const returnVal = Album.updateOne({_id : req.params.id} , {
                ...req.body
            })
            res.status(200).send(returnVal);
        }else{
            res.status(404).send('Album Not found');
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}
albumController.deletealbum = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (album) {
            const deleteduser = await Album.deleteOne({ _id : req.params.id});
            res.status(204).send('deleted')
        } else {
            res.status(404).send('album not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = albumController;