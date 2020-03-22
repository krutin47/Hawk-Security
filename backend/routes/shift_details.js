const router = require('express').Router();

let Shiftdetails = require('../models/shift_details.model.js'); 

/* GET users listing. */


router.route('/').get((req, res) => {
    Shiftdetails.find()
    .then(Shiftdetails => res.json(Shiftdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post((req, res) => {
//   const id =  req.body.id;
//   const emp_id =  req.body.EMP_ID;
//   const  =  req.body.START_DATE;
//   const id =  req.body.MON_START;
//   const id =  req.body.MON_END;
//   const id =  req.body.MON_LOC;
//   const id =  req.body.TUE_START;
//   const id =  req.body.TUE_END;
//   const id =  req.body.TUE_LOC;
//   const id =  req.body.WED_START;
//   const id =  req.body.WED_END;
//   const id =  req.body.WED_LOC;
//   const id =  req.body.THURS_START;
//   const id =  req.body.THURS_END;
//   const id =  req.body.THURS_LOC;
//   const id =  req.body.FRI_START;
//   const id =  req.body.FRI_END;
//   const id =  req.body.FRI_LOC;
//   const id =  req.body.SAT_START;
//   const id =  req.body.SAT_END;
//   const id =  req.body.SAT_LOC;
//   const id =  req.body.SUN_START;
//   const id =  req.body.SUN_END;
//   const id =  req.body.SUN_LOC;


//   const newlocation = new Location({ Location_ID: location_Id, Name: name, Address: address });

//   newlocation.save()
//     .then(() => res.json('Location added!' + newlocation))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;