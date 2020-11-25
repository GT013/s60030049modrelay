module.exports=function(app){
    var user = require('../controllers/user.controller.js');
    app.post('/login',user.login);
    app.post('/logout',user.logout);
    app.post('/user',user.create);
};