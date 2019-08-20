var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.details);
router.post('/', flightsCtrl.create);

module.exports = router;