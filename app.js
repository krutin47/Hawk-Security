/**
 * @file Root file for the backend of the Application
 * @author Milap Bhanderi, Nikita Patel, Yash Shah & Krutin Trivedi
*/

//importing the Components and required Modules
var express = require('express');
const cors = require('cors');
const passport = require("passport");
var path = require('path');
const mongoose = require('mongoose');
var app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// establishing mongo atlas connections
mongoose.connect('mongodb+srv://Hawk_Nikita:Web@nikita_2602@cluster0-uvcpm.mongodb.net/Hawk_Secutiy?retryWrites=true&w=majority',
                  { useNewUrlParser: true, useCreateIndex: true}
                );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes to all the APIs
const locationRouter = require('./routes/location');
app.use('/location', locationRouter);

const shiftRouter = require('./routes/shift_details');
app.use('/shift_details', shiftRouter);

const shiftuploadRouter = require('./routes/shift_upload');
app.use('/shift_upload', shiftuploadRouter);

const availRouter = require('./routes/avail_display');
app.use('/avail_disp', availRouter);

const employeeRouter = require('./routes/profileManagement');
app.use('/employee', employeeRouter);

const jobRouter = require('./routes/job_up_display');
app.use('/job_det', jobRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Configuration to run the code on cloud
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.json(__dirname, 'frontend', 'build', 'index.html'));
  });
}