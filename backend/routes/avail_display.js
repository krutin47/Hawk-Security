const router = require('express').Router();

let Availability = require('../models/availability.model'); 

/* GET users availability */

router.route('/').get((req, res) => {
  Availability.find()
    .then(Availability => res.json(Availability))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;