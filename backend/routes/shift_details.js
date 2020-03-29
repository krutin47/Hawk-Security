const router = require('express').Router();

let Shiftdetails = require('../models/shift_details.model.js'); 

/* GET users listing. */

let shifts = []

router.route('/').get((req, res) => {
    Shiftdetails.find()
    
    .then(Shiftdetails => res.json(Shiftdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post((req, res) => {
//   const id =  req.body.id;
//   const emp_id =  req.body.EMP_ID;
//   const  =  req.body.START_DATE;
 


//   const newlocation = new Location({ Location_ID: location_Id, Name: name, Address: address });

//   newlocation.save()
//     .then(() => res.json('Location added!' + newlocation))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:date').get((req, res) => {

    const scheduleDate = new Date(req.params.date);
    const nextDate = new Date(scheduleDate)
    nextDate.setDate(nextDate.getDate() + 1)
    Shiftdetails.find({
        StartscheduledDateTime: {
            '$gt':scheduleDate,
            '$lt':nextDate
    }
    },(err, result)=>{
        if(err){
           return res.status(404).send('Shift not found');
        }
        if(result.length > 0){
           return res.json(result); 
        }
        return  res.status(404).send('Shift not found');
       
     });
});

module.exports = router;