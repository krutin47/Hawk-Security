/**
 * @file Reset Password schema.
 * @author Krutin Trivedi <krutin@dal.ca>
 */

//importing Components & required Modules
const mongoose = require('mongoose');

//importing mongoose Schema
const Schema = mongoose.Schema;

//defining the schema for the collection 'users'
const resetPassSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    token: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});

//exporting the schema as User
module.exports = mongoose.model('resetPassword_Request', resetPassSchema);