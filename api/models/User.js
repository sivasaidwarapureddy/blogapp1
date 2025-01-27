const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
      
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
