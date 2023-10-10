const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Handle errors
const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    // dublicate error
    if (err.code === 11000) {
        errors.email = 'This email is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(error => {
            let errType = error.properties.path;
            errors[errType] = error.properties.message;
        })
    }

    return errors;
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password })
        res.status(201).json(user);
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).send({ errors });
    }
}

module.exports.login_post = (req, res) => {
    const { email, password } = req.body;
    res.send("login");
}