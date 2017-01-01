const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function() {
    let logSchema = mongoose.Schema({
        site: { type: Schema.Types.ObjectId, ref: 'Site' },
        location: { type: Schema.Types.ObjectId, ref: 'Location' },
        depth: Number,
        time: Number,
        divedBy: { type: Schema.Types.ObjectId, ref: 'User' },
        sightings: [{ type: Schema.Types.ObjectId, ref: 'Sighting' }]
    });

    let Log = mongoose.model('Log', logSchema);
};
