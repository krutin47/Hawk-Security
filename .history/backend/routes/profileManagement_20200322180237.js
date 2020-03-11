const router = require('express').Router();

// Getting Employee Model
let Employee = require('../models/employee.model');

/* GET users listing. */


router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const newEmployee = new Employee({
    email,  
    firstName,
    lastName,
    password,
  });

  newEmployee.save()
    .then(() => res.json('Employee added! => ' + newEmployee))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;