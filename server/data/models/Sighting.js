const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function() {
    let sightingSchema = mongoose.Schema({
        sites: [{ type: Schema.Types.ObjectId, ref: 'Site' }],
        logs: [{ type: Schema.Types.ObjectId, ref: 'Log' }],
        title: String
    });

    let Sighting = mongoose.model('Sighting', sightingSchema);
};
