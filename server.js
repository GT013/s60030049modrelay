process.env.NODE_ENV = process.env.NODE_ENV||'development';
var express = require('./config/express');
const mongoose = require('./config/mongoose');
var uri = 'mongodb://localhost/my-project';
var db = mongoose();
var app = express();
app.listen(3049);
module.exports = function(){
    require('./app/routes/index.routes')(app);
    require('./app/routes/user.routes')(app);
};
module.exports = app;

console.log('Server run...');