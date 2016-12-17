let encryption = require('../utilities/encryption'),
    jwt = require('jwt-simple'),
    users = require('../data/users'),
    User = require('mongoose').model('User'),
    config = require('../config/database');

let CONTROLLER_NAME = 'users';

module.exports = {
    postRegister: function(req, res) {
        let newUserData = req.body;

        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
        users.create(newUserData, function(err, user) {
            if (err) {
                console.log('Failed to register new user: ' + err);
                return res.json({success: false, msg: err });
            } else {
                console.log('User created ' + user);
                return res.json({success: true, msg: 'User created successfully.'});
            }
        });
    },
    postAuthenticate: function(req, res) {
        User.findOne({
            username: req.body.username
        }, function(err, user) {
            if (err){
                throw err;
            }
        
            if (!user) {
                res.send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
                // check if password matches
                if (user.authenticate(req.body.password)) {
                    // if user is found and password is right create a token
                    let token = jwt.encode(user, config.secret);
                    // return the information including token as JSON
                    return res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            }
        });
    }
};
