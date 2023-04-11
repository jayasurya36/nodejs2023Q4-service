const router = require('express').Router();
const favouriteController = require('../controllers/favourites.controller');

router.get('/favs' , favouriteController.getAll);

router.post('/favs/track/:id' , favouriteController.isFav , favouriteController.postTrack);
router.delete('/favs/track/:id' , favouriteController.deleteTrack);

router.post('/favs/artist/:id' , favouriteController.isFav , favouriteController.postArtist);
router.delete('/favs/artist/:id' , favouriteController.deleteArtist);

router.post('/favs/album/:id' , favouriteController.isFav , favouriteController.postAlbum);
router.delete('/favs/album/:id' , favouriteController.deleteAlbum);

module.exports = router;