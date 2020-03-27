const router = require('express').Router();

// Getting Employee Model
let Employee = require('../models/employee.model');

/* GET users listing. */


router.route('/').get((req, res) => {
  Employee.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const location_Id = req.body.Location_ID;
  const name = req.body.Name;
  const address = req.body.Address;

  const newlocation = new Location({ Location_ID: location_Id, Name: name, Address: address });

  newlocation.save()
    .then(() => res.json('Location added!' + newlocation))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;