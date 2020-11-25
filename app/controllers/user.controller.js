var User = require('mongoose').model('User');

exports.create = function(req,res,next){
    var user = new User(req.body);

    user.save(function(err){
        if(err){
            return next(err);
        }
        else{
            res.json(user);
        }
    });
};

exports.login=function(req,res){
    console.log(req.body);
    console.log('Email: '+req.body.email);
    console.log('Password: '+req.body.password);

    res.render('index',{
        title: 'Logged in as ' + req.body.email,
        isLoggedIn:true
    });
};

exports.logout = function(req,res){
    res.render('index',{
        title:'See you again later',
        isLoggedIn:false
    });
}