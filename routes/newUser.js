
/*
 * GET home page.
 */
var data = require('../userData.json');

exports.registerNewUser = function(req, res){
    var name = req.query.name;
    var age = req.query.age;
    var contact = req.query.contact;
    var username = req.query.username;
    var password = req.query.password;
    var password2 = req.query.password2;
    var valid = {"valid":false};
    
    if (name != "" && age != "" && contact != "" && username != "" && password != "" && password == password2)
    {
        valid = {"valid":true};
        var newUser = {"name":name,
                        "age":age,
                        "contact":contact,
                        "username":username,
                        "password":password};
        data["userData"].push(newUser);
    }

    res.render('newUser',valid);
};