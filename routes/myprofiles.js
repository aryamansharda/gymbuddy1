var data = require('../userData.json');
exports.viewMyprofiles = function (req, res) {
	console.log("myprofiles.viewMyprofiles");
	var i
    for (i = 0; i < data["userData"].length; i++) {
        if (data["userData"][i].username == "gym") {
        	var newdata = data["userData"][i];
        	break;
        }           
    }   
	res.render('myprofiles', newdata);
}
