const router = require('express').Router();

// Getting Employee Model
let Employee = require('../models/employee.model');

/* GET users listing. */


router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
      .then(() => res.json('employee deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/login').post((req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;
  
  Employee.findOne({email: '' + email})
    .then(employee => {
      if(employee.password === password) {
        res.json("login successful..!!");
      } else {
        res.json("Error");
      }
    })
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
        employee.address = req.body.address;
        employee.phone = req.body.phone;
        employee.gender = req.body.gender;

        employee.save()
            .then(() => res.json('Employee details Updated! => ' + employee))
            .catch(err => res.status(400).json('Error: ' + err));    
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const role = 1;
  const address = '';
  const phone = Number(0000000000);
  const gender = '';


  const newEmployee = new Employee({ 
    firstName,
    lastName,
    email,
    password,
    role,
    address,
    phone,
    gender,
  });


  Employee.findOne({email: '' + email})
    .then(employee => {
        if(employee) {
            res.json('Error');
        } else {
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newEmployee.password, salt, (err, hash) => {
              if (err) throw err;
              newEmployee.password = hash;
              newEmployee.save()
                  .then(() => res.json('Employee added! => ' + newEmployee))
                  .catch(err => res.status(400).json('Error: ' + err));
            });
          });    
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;