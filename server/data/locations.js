const Location = require('mongoose').model('Location');

module.exports = {
    getAll: function({}, callback){
        // Location.find()
    },
    create: function (location, callback) {
        Location.create(location, callback);
    },
    update: function (location, callback) {
        let query = { '_id': location._id };

        Location.findOneAndUpdate(query, location, { 
            new: true,
            upsert: false 
        }, callback);
    },
    delete: function (location, callback) {
        Location.findOneAndRemove({ _id: location._id }, callback);
    }
};