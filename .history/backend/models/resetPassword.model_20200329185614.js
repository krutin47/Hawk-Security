const mongoose = require('mongoose');

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
    expiration:{
        type: Date,
        require: true,
        trim: true,
        minlength: 1
    },
}, {
    timestamps: true,
});

//exporting the schema as User
module.exports = mongoose.model('resetPass', resetPassSchema);