/**
 * @file API for the job related feature of the Application.
 * @author Yash Shah
 */

//importing the Components and required Modules
const router = require('express').Router();
let Jobs = require('../models/job.model.js'); 

//returns all the job entries from the table
router.route('/').get((req, res) => {
  Jobs.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//adds job details added by the admin
router.route('/add').post((req, res) => {
  const Job_ID = req.body.JOB_ID;
  const Job_Role = req.body.JOB_ROLE;
  const Job_Description = req.body.JOB_DESC;
  const Job_Qualification = req.body.JOB_QUAL;

  const newjob = new Jobs({ JOB_ID: Job_ID, JOB_ROLE: Job_Role, JOB_DESC: Job_Description, JOB_QUAL: Job_Qualification });

  newjob.save()
    .then(() => res.json('Job Posting added!' + newjob))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;