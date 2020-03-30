const router = require('express').Router();

let Empdetails = require('../models/employee_and_id');

router.route('/').get((req, res) => {
    Empdetails.find()
    .then(Empdetails => res.json(Empdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;