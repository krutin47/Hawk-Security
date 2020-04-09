/**
 * @file Location schema.
 * @author Milap Bhanderi & Nikita Patel
 */

//importing required Modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the schema for the collection "location_details"
const locationSchema = new Schema({
  Location_ID: {
    type: String,
    unique: true,
    trim: true
  },
  Name: {
      type: String
  },
  Address: {
      type: String
  }
},
{
  versionKey: false
});

const Location = mongoose.model('location_details', locationSchema);

module.exports = Location;