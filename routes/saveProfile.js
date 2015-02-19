
//var numberOfProfiles = 1;
var data = require('../userData.json');

exports.saveProfile = function(req, res){
    //res.render('login');

    var profileName = req.query.profileNameEdit;
    var liftingRangeValue = req.query.liftingRangeEdit; 
    var liftingSkillValue = req.query.liftingskillEdit;
    var runningRangeValue = req.query.runningRangeEdit;
    var runningSkillValue = req.query.runningskillEdit;
    var mondayTimeValue = req.query.monday_timeEdit;
    var tuesdayTimeValue = req.query.tuesday_timeEdit;
    var wednesdayTimeValue = req.query.wednesday_timeEdit;
    var thursdayTimeValue = req.query.thursday_timeEdit;
    var fridayTimeValue = req.query.friday_timeEdit;
    var saturdayTimeValue = req.query.saturday_timeEdit;
    var sundayTimeValue = req.query.sunday_timeEdit;
    
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
            var newdata = UserProfilesData[k];
            break;
        }
    }
    //console.log(newdata);
    var currentNumberOfProfiles = newdata.profileNumber;

    //TODO error checking on input params
    var newProfile = {
        "profileNumber":currentNumberOfProfiles,
        "profileName":profileName,
        "spotter": [
            {
                "range":liftingRangeValue,
                "skill":liftingSkillValue
            }
        ],
        "running": [
            {
                "distance":runningRangeValue,
                "skill":runningSkillValue
            }
        ],
        "schedule": [
            {
                "monday":mondayTimeValue,
                "tuesday":tuesdayTimeValue,
                "wednesday":wednesdayTimeValue,
                "thursday":thursdayTimeValue,
                "friday":fridayTimeValue,
                "saturday":saturdayTimeValue,
                "sunday":sundayTimeValue
            }
        ]
    };

    userSpecificData["profiles"][k] = newProfile;
    /*var i
    for (i = 0; i < data["userData"].length; i++) {
        if (data["userData"][i].username == "gym") {
            var newdata = data["userData"][i];
            break;
        }           
    }  

    newdata["profiles"].push(newProfile);
    numberOfProfiles = numberOfProfiles + 1;*/
    res.render('saveProfile');
};