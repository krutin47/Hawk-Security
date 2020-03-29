const router = require('express').Router();

// Getting Employee Model
let Employee = require('../models/employee.model');

/* GET users listing. */


router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
        employee.firstName = req.body.firstName;
        employee.lastName = req.body.lastName;
        employee.email = req.body.email;
        employee.password = req.body.password;
        employee.role = req.body.role;
        res.json(employee);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const role = 1;

  const newEmployee = new Employee({ 
    firstName,
    lastName,
    email,
    password,
    role,
  });


  Employee.findOne({email: '' + email})
    .then(employee => {
        if(employee) {
            res.json('Error');
        } else {
            newEmployee.save()
                .then(() => res.json('Employee added! => ' + newEmployee))
                .catch(err => res.status(400).json('Error: ' + err));    
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));

  
});

module.exports = router;