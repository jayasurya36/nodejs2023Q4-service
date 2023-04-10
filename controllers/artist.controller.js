const Artist = require('../models/artist.model');
let artistController = {}
artistController.getAll = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.status(200).send(artists);
    } catch (err) {
        res.status(500).send(err.message)
    }
}
artistController.getById = async (req, res) => {
    try {
        let artist = await Artist.findOne({ _id: req.params.id });
        if (artist === null) { res.status(404).send('Artist not found'); }
        else res.status(200).send(artist)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
artistController.createArtist = async (req, res) => {
    try {
        if (req.body) {
            let artist = new Artist(req.body)
            const returnVal = await artist.save();
            res.status(201).send(returnVal)
        } else {
            res.status(400).send('request body cannot be empty')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}
artistController.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if(artist !== null){
            const returnVal = Artist.updateOne({_id : req.params.id} , {
                ...req.body
            })
            res.status(200).send(returnVal);
        }else{
            res.status(404).send('Artist Not found');
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}
artistController.deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (artist) {
            const deleteduser = await Artist.deleteOne({ _id : req.params.id});
            res.status(204).send('deleted')
        } else {
            res.status(404).send('Artist not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = artistController;