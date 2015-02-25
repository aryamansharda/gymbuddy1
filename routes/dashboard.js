//var data = require('../userData.json');
var models = require('../models');

exports.viewDashboard = function (req, res) {
    
	res.render('dashboard');
}

exports.viewMatches = function (req, res) {
    var username = req.params.username;
    
    models.Profile
    .find()
    .where('username').ne(username)
    .exec(renderProfile);
    
    function renderProfile(err, profile) {
        res.json(profile);
    }
    
    /*for (i = 0; i < data["userData"].length; i++)
     {
     for (j = 0; j < data["userData"][i]["profiles"].length; j++)
     {
     add = {"name":data["userData"][i].name, "profile":data["userData"][i]["profiles"][j]};
     console.log(data["userData"][i]["profiles"][j]);
     newData["userProfile"].push(add);
     }
     }
    
    res.render('dashboard',newData);*/
}