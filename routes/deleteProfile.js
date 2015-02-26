var global_profileName;

//var numberOfProfiles = 1;
//var data = require('../userData.json');
var models = require('../models');

exports.deleteProfile = function(req, res){
    global_profileName = req.query.profileNameEdit;
    /*
    var j;
    for (j = 0; j < data["userData"].length; j++) {
        if (data["userData"][j].username == "gym") {
            var userSpecificData = data["userData"][j];
            break;
        }           
    }  
    var UserProfilesData = userSpecificData["profiles"];
    var k
    for (k = 0; k < UserProfilesData.length; k++) {
        if (UserProfilesData[k].profileName == profileName) {
            var indexToDelete = k;
            break;
        }
    }

    UserProfilesData = UserProfilesData.splice(k, 1);
    */

    res.render('deleteProfile');
};

exports.del = function(req, res) {
    var username = req.params.username;
    var profileName = global_profileName;

    models.Profile
    .find({"username":username, "profileName":profileName})
    .remove()
    .exec(afterRemoving);

    function afterRemoving(err) {
        if(err) console.log(err);
        res.render('myprofiles');
    }
}