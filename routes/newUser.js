
/*
 * GET home page.
 */
//var data = require('../userData.json');
var models = require('../models');

exports.registerNewUser = function(req, res){
    var name = req.query.name;
    var age = req.query.age;
    var gender = req.query.gender;
    var contact = req.query.contact;
    var username = req.query.username;
    var password = req.query.password;
    var password2 = req.query.password2;
    var valid = {"valid":false};
    
    if (name != "" && age != "" && (gender == "male" || gender == "female") && contact != "" && username != "" && password != "" && password == password2)
    {
        valid = {"valid":true};
        /*var newUser = {"name":name,
                        "age":age,
                        "gender":gender,
                        "contact":contact,
                        "username":username,
                        "password":password,
                        "profiles":[]};
        data["userData"].push(newUser);*/
        var newPost = new models.User({
            "name": name,
            "age": age,
            "gender": gender,
            "contact": contact,
            "username": username,
            "password": password
        });
        newPost.save(afterSaving);
        
        function afterSaving(err) {
            if(err) console.log(err);
            res.render('newUser', valid);
        }
    }
    else
        res.render('newUser',valid);
};