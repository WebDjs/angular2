const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function() {
    let siteSchema = mongoose.Schema({
        location: { type: Schema.Types.ObjectId, ref: 'Location' },
        name: String,
        sightings: [{ type: Schema.Types.ObjectId, ref: 'Sighting' }]
    });

    let Site = mongoose.model('Site', siteSchema);
};