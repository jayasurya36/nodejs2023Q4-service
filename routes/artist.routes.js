const router = require('express').Router();
const artistController = require('../controllers/artist.controller');

router.get('/artist' , artistController.getAll);
router.get('/artist/:id' , artistController.getById);
router.post('/artist' , artistController.createArtist);
router.put('/artist/:id' , artistController.updateArtist);
router.delete('/artist/:id' , artistController.deleteArtist);


module.exports = router;