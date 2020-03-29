const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//defining the schema for the collection 'users'
const empSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
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
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    role:{
        type: Number,
        require: true,
        trim: true,
        minlength: 1
    },
    Address:{
        type: String,
        minlength: 50,
    },
    Phone:{
        type: Number,
        minlength: 14,
    },
    Gender:{
        type: String,
        minlength: 6 
    },
    DOB:{
        type: Date, 
    }
}, {
    timestamps: true,
});

//exporting the schema as User
module.exports = mongoose.model('employee', empSchema);