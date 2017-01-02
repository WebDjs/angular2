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
            user: {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                id: user._id,
                imageUrl: user.imageUrl,
                description: user.description,
                logs: user.logs
            }
        });
    });
}

function postDelete(req, res) {
    let username = req.body.username;
    users.delete(username, function (err, user) {
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
            user: {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                id: user._id,
                deleted: true
            }
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
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        id: user._id,
                        imageUrl: user.imageUrl,
                        description: user.description,
                        logs: user.logs
                    }
                });
            } else {
                res.status(401).send({ err: 'Authentication failed. Wrong password.' });
            }
        }
    });
}

function getById(req, res) {
    users.getById({ _id: req.params.id }, function (err, user) {
        if (err) {
            return res.status(400).json({
                success: false,
                msg: {
                    code: err.code,
                    message: err.message
                }
            });
        }

        return res.status(200).json({
            success: true,
            user: {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                id: user._id,
                imageUrl: user.imageUrl,
                description: user.description,
                logs: user.logs
            }
        });
    });
}

module.exports = {
    getById,
    postRegister,
    postAuthenticate,
    postUpdate,
    postDelete
};
