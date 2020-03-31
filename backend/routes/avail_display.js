const router = require('express').Router();

let Empdetails = require('../models/employee_and_id.model');
let Availability = require('../models/availability.model'); 

/* GET users availability */

router.route('/').get((req, res) => {
  Availability.find()
    .then(Availability => res.json(Availability))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  Empdetails.find({EMP_ID: id})
    .then(Data => res.json(Data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const emp_id = req.body.id;
  const name = req.body.first_name + " " + req.body.last_name;
  const start = req.body.start;
  const end = req.body.end;

  Availability.find({id: emp_id},
    (err, result)=>{
      if(err){
        return res.status(404).send('Sorry! Would not be able to process your request');
      }
      if(result.length > 0)
      {
        const query = {id: emp_id};
        const newvalues = {$set: 
          { id: emp_id, 
            EMP_ID: name, 
            MON_START: start[0], 
            MON_END: end[0],
            TUE_START: start[1], 
            TUE_END: end[1], 
            WED_START: start[2], 
            WED_END: end[2], 
            THURS_START: start[3], 
            THURS_END: end[3], 
            FRI_START: start[4], 
            FRI_END: end[4], 
            SAT_START: start[5], 
            SAT_END: end[5], 
            SUN_START: start[6], 
            SUN_END: end[6]
          }};
        Availability.updateOne(query, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
        })
        .catch(err => res.status(400).json('Error: ' + err));
      }
      else
      {
        const newvalues = { id: emp_id, 
            EMP_ID: name, 
            MON_START: start[0], 
            MON_END: end[0],
            TUE_START: start[1], 
            TUE_END: end[1], 
            WED_START: start[2], 
            WED_END: end[2], 
            THURS_START: start[3], 
            THURS_END: end[3], 
            FRI_START: start[4], 
            FRI_END: end[4], 
            SAT_START: start[5], 
            SAT_END: end[5], 
            SUN_START: start[6], 
            SUN_END: end[6]
          };

        const avail_values = new Availability(newvalues);

        console.log(avail_values);
        
        // avail_values.save()
        //   .then(() => res.json('Data added...!  ' + avail_values));
      }
    });


  //       console.log(res.id);
        // employee.firstName = req.body.firstName;
        // employee.lastName = req.body.lastName;
        // employee.address = req.body.address;
        // employee.phone = Number(req.body.phone);
        // employee.gender = req.body.gender;

        // employee.save()
        //     .then(() => res.json('Employee details Updated! => ' + employee))
        //     .catch(err => res.status(400).json('Error: ' + err));    
    // });
    
});


module.exports = router;