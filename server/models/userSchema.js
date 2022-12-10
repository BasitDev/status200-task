const mongoose = require('mongoose');

//User Schema
const userSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

//User Model
const users = new mongoose.model('users', userSchema);


module.exports = users;