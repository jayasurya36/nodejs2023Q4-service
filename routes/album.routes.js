const router = require('express').Router();
const albumController = require('../controllers/album.controller');

router.get('/album' , albumController.getAll);
router.get('/album/:id' , albumController.getById);
router.post('/album' , albumController.createAlbum);
router.put('/album/:id' , albumController.updateAlbum);
router.delete('/album/:id' , albumController.deletealbum);


module.exports = router;