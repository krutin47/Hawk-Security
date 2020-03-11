const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//defining the schema for the collection 'users'
const empSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
    EMP_ID: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3 
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    Password: {
        type: String,
        require: true,
        minlength: 6
    },
    Address:{
        type: String,
    },
    Phone:{
        type: String, 
    },
    Gender:{
        type: String, 
    },
    
    DOB:{
        type: String, 
    }
}, {
    timestamps: true,
});

//exporting the schema as User
module.exports = mongoose.model('Employee', empSchema);