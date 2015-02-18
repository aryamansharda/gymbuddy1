
var data = require('../userData.json');

exports.addProfile = function(req, res){
    //res.render('login');
    var liftingRangeValue = req.query.liftingRange; 
    var liftingSkillValue = req.query.liftingskill;
    var runningRangeValue = req.query.runningRange;
    var runningSkillValue = req.query.runningskill;
    var mondayTimeValue = req.query.monday_time;
    var tuesdayTimeValue = req.query.tuesday_time;
    var wednesdayTimeValue = req.query.wednesday_time;
    var thursdayTimeValue = req.query.thursday_time;
    var fridayTimeValue = req.query.friday_time;
    var saturdayTimeValue = req.query.saturday_time;
    var sundayTimeValue = req.query.sunday_time;
    console.log(mondayTimeValue);

    //TODO error checking on input params
    var newProfile = {
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

    var i
    for (i = 0; i < data["userData"].length; i++) {
        if (data["userData"][i].username == "gym") {
            var newdata = data["userData"][i];
            break;
        }           
    }  

    newdata["profiles"].push(newProfile);
    res.render('addProfile');
};