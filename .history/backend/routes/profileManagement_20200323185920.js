const router = require('express').Router();

// Getting Employee Model
let Employee = require('../models/employee.model');

/* GET users listing. */


router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/check').post((req, res) => {
  const email = req.body.email;
  
  Employee.findOne({email: '' + email}, function(err,obj) { console.log(obj); });
    // .then(employee => res.json(employee))
    // .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  const newEmployee = new Employee({ 
    firstName,
    lastName,
    email,
    password,
    role,
  });


  newEmployee.save()
    .then(() => res.json('Employee added! => ' + newEmployee))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;