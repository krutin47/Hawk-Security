const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
var nodemailer = require('nodemailer');

// Getting Employee Model
let Employee = require('../models/employee.model');

/* GET employees listing. */


router.route('/').get((req, res) => {
  Employee.find()
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/check:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
      res.json(employee)
      console.log(employee);
      
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete:id').delete((req, res) => {
  console.log(req.params.id);
  Employee.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.json('employee deleted.' + req.params.id))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/login').post((req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;
  
  // Find employee by email
  Employee.findOne({ email })
    .then(employee => {
      
      // Check if employee exists
      if (!employee) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }      
      
      // Check password
      bcrypt.compare(password, employee.password).then(isMatch => {
        if (isMatch) {
          // Employee matched
          // Create JWT Payload
          const payload = {
            id: employee.id,
            email: employee.email,
            role: employee.role
          };
          
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});

router.route('/update').post((req, res) => {
  Employee.findById(req.body.id)
    .then(employee => {
        employee.firstName = req.body.firstName;
        employee.lastName = req.body.lastName;
        employee.address = req.body.address;
        employee.phone = Number(req.body.phone);
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

  Employee.findOne({email})
    .then(employee => {
        if(employee) {
            res.json('Oops! Email id is already taken.');
        } else {
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(newEmployee.password, salt, (error_, hash) => {
              if (error_) console.log(error_);
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

router.route('/forgot').post((req, res) => {
  const email = req.body.email;

  Employee.findOne({email})
    .then(employee => {
      if(employee.email === req.body.email) {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'hawkdeveloper5709@gmail.com',
            pass: 'Admin@123'
          }
        });
        
        var mailOptions = {
          from: 'hawkdeveloper5709@gmail.com',
          to: 'krutin47trivedi@gmail.com',
          subject: 'Sending Email using Node.js',
          text: 'That was easy!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      } else {
        res.status(400).json('Error: Email id does not match oue records');
      }   
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;