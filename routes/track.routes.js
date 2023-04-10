const router = require('express').Router();
const trackController = require('../controllers/tracks.controller');

router.get('/track' , trackController.getAll);
router.get('/track/:id' , trackController.getById);
router.post('/track' , trackController.createTrack);
router.put('/track/:id' , trackController.updateTrack);
router.delete('/track/:id' , trackController.deleteTrack);


module.exports = router;