const mongoose = require('mongoose'),
    encryption = require('../../utilities/encryption'),
    Schema = mongoose.Schema,
    requiredMessage = '{PATH} is required';

module.exports.init = function() {
    let userSchema = mongoose.Schema({
        username: { type: String, required: requiredMessage, unique: true },
        salt: String,
        hashPass: String,
        email: String,
        firstName: String,
        lastName: String,
        logs: { type: Array, 'default': [] },
        imageUrl: String,
        description: String
    });

    userSchema.method({
        authenticate: function(password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                return true;
            }
            else {
                return false;
            }
        }
    });

    let User = mongoose.model('User', userSchema);
};
