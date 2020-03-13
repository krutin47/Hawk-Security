const mongoose = require('mongoose');

//defining the schema for the collection 'users'
const empSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
    EMP_ID: {
        type:String,
        required: true
    },
    Name:{
        type:String,
        required: true 
    },
    Address:{
        type:String,
    },
    Phone:{
        type:String, 
    },
    Gender:{
        type:String, 
    },
    Email: {
        type: String,
        required: true
    },
    DOB:{
        type:String, 
    },
    Password: String

});

//exporting the schema as User
module.exports = mongoose.model("employee_model", empSchema);