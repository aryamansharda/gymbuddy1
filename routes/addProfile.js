
var data = require('../userData.json');

exports.addProfile = function(req, res){
    //res.render('login');
    var liftingRangeValue = req.query.liftingRange; 
    var liftingSkillValue = req.query.liftingskill;
    var runningRangeValue = req.query.runningRange;
    var runningSkillValue = req.query.runningskill;
        
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