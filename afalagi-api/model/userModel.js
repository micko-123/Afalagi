const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type:Number,
        unique: true
    },
    photo: {
        type: String,
    },
    password: {
        type:String
    },
    passwordConfig: {
        type: String,
    }
})

