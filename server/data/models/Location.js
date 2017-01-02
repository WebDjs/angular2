const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function() {
    let locationSchema = mongoose.Schema({
        name: String,
        sites: { type : Array , "default" : [] },
        logs: { type : Array , "default" : [] },
        latitude: Number,
        longitude: Number,
        imageUrls: { type : Array , "default" : [] }
    });

    let Location = mongoose.model('Location', locationSchema);
};