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
}, {
    timestamps: true,
});

//exporting the schema as User
module.exports = mongoose.model('resetPass', resetPassSchema);