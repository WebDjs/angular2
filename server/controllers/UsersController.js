let encryption = require('../utilities/encryption'),
    jwt = require('jwt-simple'),
    users = require('../data/users'),
    User = require('mongoose').model('User'),
    config = require('../config/database');

function postRegister(req, res) {
    let newUserData = req.body;
    if (newUserData.password !== newUserData.confirmPassword) {
        return res.status(400).json({ success: false, msg: { message: 'Password mismatch' } });
    }

    newUserData.salt = encryption.generateSalt();
    newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
    users.create(newUserData, function (err, user) {
        if (err) {
            return res.status(409).json({ success: false, msg: { code: err.code, message: err.message } });
        } else {
            return postAuthenticate(req, res);
        }
    });
}

function postUpdate(req, res) {
    let newUserData = req.body;
    users.update(newUserData, function (err, user) {
        console.log(user)
        if (err) {
            return res.status(400).json({
                    success: false,
                    msg: {
                        code: err.code,
                        message: err.message
                    }
                });
        }

        return res.status(201).json({
            success: true,
            user: user
        });
    });
}

function postAuthenticate(req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) {
            throw err;
        }

        if (!user) {
            res.status(401).send({ err: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            if (user.authenticate(req.body.password)) {
                // if user is found and password is right create a token
                let token = jwt.encode(user, config.secret);
                // return the information including token as JSON
                return res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username
                    }
                });
            } else {
                res.status(401).send({ err: 'Authentication failed. Wrong password.' });
            }
        }
    });
}

module.exports = {
    postRegister,
    postAuthenticate,
    postUpdate
};
