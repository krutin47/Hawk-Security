const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shiftdetailSchema = new Schema({
  id: {
    type: String,
    unique: true,
    trim: true
  },
  EMP_ID: {
      type: String
  },
  START_DATE: {
      type: String
  },
  MON_START:{
      type: String
  },
  MON_END:{
      type: String
  },
  MON_LOC:{
      type: String
  },
  TUE_START:{
      type: String
  },
  TUE_END:{
      type: String
  },
  TUE_LOC:{
      type: String
  },
  WED_START:{
      type: String
  },
  WED_END: {
      type: String
  },
  WED_LOC:{
      type: String
  },
  THURS_START:{
      type: String
  },
  THURS_END:{
      type: String
  },
  THURS_LOC: {
      type: String
  },
  FRI_START: {
      type: String
  },
  FRI_END: {
      type: String
  },
  FRI_LOC: {
      type: String
  },
  SAT_START: {
      type: String
  },
  SAT_END: {
      type: String
  },
  SAT_LOC: {
      type: String
  },
  SUN_START: {
      type: String
  },
  SUN_END: {
      type: String
  },
  SUN_LOC: {
      type: String
  }
},
{
  versionKey: false
});


const ShiftDetails = mongoose.model('shift_details', shiftdetailSchema);

module.exports = ShiftDetails;