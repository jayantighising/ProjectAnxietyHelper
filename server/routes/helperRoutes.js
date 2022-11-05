const express = require('express');
const router = express.Router();
const helperController = require('../controllers/helperController');


/**
 * App Routes
 */
router.get('/', helperController.homepage);

router.get('/vent', helperController.ventpage);



module.exports = router;