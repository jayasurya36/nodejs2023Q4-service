const Track = require('../models/track.model');
let TrackController = {}
TrackController.getAll = async (req, res) => {
    try {
        const tracks = await Track.find();
        res.status(200).send(tracks);
    } catch (err) {
        res.status(500).send(err.message)
    }
}
TrackController.getById = async (req, res) => {
    try {
        let track = await Track.findOne({ _id: req.params.id });
        if (track === null) { res.status(404).send('Artist not found'); }
        else res.status(200).send(track)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
TrackController.createTrack = async (req, res) => {
    try {
        if (req.body) {
            let track = new Track(req.body)
            const returnVal = await track.save();
            res.status(201).send(returnVal)
        } else {
            res.status(400).send('request body cannot be empty')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}
TrackController.updateTrack = async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        if(track !== null){
            const returnVal = Track.updateOne({_id : req.params.id} , {
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
TrackController.deleteTrack = async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        if (track) {
            const deleteduser = await Track.deleteOne({ _id : req.params.id});
            res.status(204).send('deleted')
        } else {
            res.status(404).send('Artist not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = TrackController