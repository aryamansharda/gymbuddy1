
/*
 * GET home page.
 */
var data = require('../userData.json');

exports.registerNewUser = function(req, res){
    var name = req.query.name;
    var age = req.query.age;
    var gender = req.query.gender;
    var contact = req.query.contact;
    var username = req.query.username;
    var password = req.query.password;
    var password2 = req.query.password2;
    var valid = {"valid":false};

    console.log(gender);
    
    if (name != "" && age != "" && (gender == "male" || gender == "female") && contact != "" && username != "" && password != "" && password == password2)
    {
        valid = {"valid":true};
        var newUser = {"name":name,
                        "age":age,
                        "gender":gender,
                        "contact":contact,
                        "username":username,
                        "password":password,
                        "profiles":[]};
        data["userData"].push(newUser);
    }
    res.render('newUser',valid);
};