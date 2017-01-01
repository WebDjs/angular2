const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function() {
    let locationSchema = mongoose.Schema({
        name: String,
        sites: [{ type: Schema.Types.ObjectId, ref: 'Site' }],
        logs: [{ type: Schema.Types.ObjectId, ref: 'Log' }],
        latitude: Number,
        longitude: Number
    });

    let Location = mongoose.model('Location', locationSchema);
};