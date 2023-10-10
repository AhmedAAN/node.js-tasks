const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { isEmail } = require('validator')

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minLength: [6, 'minimum password length is 6']
    }
}, { timestamps: true });


userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})
const User = mongoose.model("user", userSchema);
module.exports = User;