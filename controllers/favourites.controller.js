const Favourites = require('../models/favorites.model');
const Track = require('../models/track.model');
const Artist = require('../models/artist.model');
const Album = require('../models/album.model');
let FavouriteController = {}
FavouriteController.getAll = async (req, res) => {
    try {
        const favourite = await Favourites.find();
        res.status(200).send(favourite);
    } catch (err) {
        res.status(500).send(err.message)
    }
}
// FavouriteController.postTrack = async(req , res)=>{
//     try{
//         let tracks = await Track.find();
//         if(tracks.find(req.params.id)){
//             let favorites = await Favourites.find();

//         }else{

//         }
//     }catch(err){

//     }
// }

module.exports = FavouriteController