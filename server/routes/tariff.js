import express from 'express';
import tariffController from '../controllers/tariffController';

const router = express.Router();

// Get list of tariffs
router.route('/').get(tariffController.getTarrifs);

module.exports = router;
