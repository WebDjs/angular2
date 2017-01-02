let locations = require('../data/locations'),
    Location = require('mongoose').model('Location'),
    config = require('../config/database');

function postCreate(req, res) {
    let newLocationData = req.body;

    locations.create(newLocationData, function (err, location) {
        if (err) {
            return res.status(400).json({ success: false, msg: { code: err.code, message: err.message } });
        } else {
            return res.status(201).json({
                success: true,
                location: {
                    _id: location._id,
                    name: location.name,
                    sites: location.sites,
                    logs: location.logs,
                    latitude: location.latitude,
                    longitude: location.longitude,
                    imageUrls: location.imageUrls
                }
            })
        }
    });
}

function postUpdate(req, res) {
    let newLocationData = req.body;
    locations.update(newLocationData, function (err, location) {
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
            location: {
                _id: location._id, 
                name: location.name,
                sites: location.sites,
                logs: location.logs,
                latitude: location.latitude,
                longitude: location.longitude,
                imageUrls: location.imageUrls
            }
        });
    });
}

function getAll(req, res) {
    // return 
}

module.exports = {
    postCreate,
    postUpdate
};
