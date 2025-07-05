const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    gender:{
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    photo: {
        type: String
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;