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
    locations.getAll({}, function(err, data){
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
            data: data
        });
    });
}

function getById(req, res) {
    console.log(req.params)
    locations.getAll({ _id: req.params.id }, function(err, data){
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
            data: data
        });
    });
}

module.exports = {
    postCreate,
    postUpdate,
    getAll,
    getById
};
