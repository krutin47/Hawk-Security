const router = require('express').Router();

let Availability = require('../models/availability.model'); 

/* GET users availability */

router.route('/').get((req, res) => {
  Availability.find()
    .then(Availability => res.json(Availability))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const EMP_ID = req.body.EMP_ID;
  const MON_START = req.body.  MON_START;
  const MON_END = req.body.MON_END;
  const TUE_START = req.body.TUE_START;
  const TUE_END = req.body.TUE_END;
  const WED_START = req.body.WED_START;
  const WED_END = req.body.WED_END;
  const THURS_START = req.body.THURS_START;
  const THURS_END = req.body.THURS_END;
  const FRI_START = req.body.FRI_START;
  const FRI_END = req.body.FRI_END;
  const SAT_START = req.body.SAT_START;
  const SAT_END = req.body.SAT_END;
  const SUN_START = req.body.SUN_START;
  const SUN_END = req.body.SUN_END;



  const ava = new Availability({ EMP_ID: EMP_ID, MON_START: MON_START, MON_END: MON_END,
                                 TUE_START: TUE_START, TUE_END: TUE_END, WED_START: WED_START,
                                 WED_END: WED_END, THURS_START: THURS_START, THURS_END: THURS_END,
                                 FRI_START: FRI_START, FRI_END: FRI_END, SAT_START: SAT_START,
                                 SAT_END: SAT_END, SUN_START: SUN_START, SUN_END: SUN_END });

  ava.save()
    .then(() => res.json('Avaibility added.........!  ' + ava))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;