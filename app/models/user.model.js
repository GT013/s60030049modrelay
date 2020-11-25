const { strict } = require('assert');
var mongoose = require('mongoose');
const { stringify } = require('querystring');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {type: String, unique: true},
    email: {type: String, index: true},
    password: String
});

mongoose.model('User', UserSchema);