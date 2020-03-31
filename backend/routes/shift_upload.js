const router = require('express').Router();

let Empdetails = require('../models/employee_and_id.model');
let Shift_data = require('../models/shift_details.model');


router.route('/').get((req, res) => {
    Empdetails.find()
    .then(Empdetails => res.json(Empdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:name').get((req, res) => {
    const empname = req.params.name;
    Empdetails.find({Name: empname})
      .then(Empdetails => res.json(Empdetails))
      .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const name = req.body.emp_name;
    const id = req.body.emp_id;
    const start = req.body.start;
    const date = new Date(req.body.date);
    const end = req.body.end;
    const location = req.body.location;
    

    for (var i = 0; i < 7; i++)
    {
      if(start[i] === -1 || end[i] === -1) continue;
      else
      {
        var snext = new Date(req.body.date);
        var enext = new Date(req.body.date);

        snext.setDate(snext.getDate() + i);
        snext.setMonth(snext.getUTCMonth());
        enext.setDate(enext.getDate() + i);
        enext.setMonth(enext.getUTCMonth());

        snext.setHours(start[i].substring(0,2) - 3);
        snext.setMinutes(start[i].substring(3,5))
        enext.setHours(end[i].substring(0,2) - 3);
        enext.setMinutes(end[i].substring(3,5));
        
        const shift_temp = new Shift_data({ EMP_ID: id, Name: name, StartscheduledDateTime: snext, EndscheduledDateTime: enext, location: location});
        console.log(shift_temp);

        shift_temp.save()
          .then(() => res.json('Shift added.........!  ' + shift_temp));
      }
    }


    // console.log(newlocation);
    // newlocation.save()
  
});


module.exports = router;