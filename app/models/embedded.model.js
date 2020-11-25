const { strict } = require('assert');
var mongoose = require('mongoose');
const { stringify } = require('querystring');
var Schema = mongoose.Schema;

var embedded = new Schema({
    temperature: Number,
    humidity: Number,
    year: Number,
    month: Number,
    day: Number,
    hour: Number,
    minute: Number
});

mongoose.model('embedded', embedded);