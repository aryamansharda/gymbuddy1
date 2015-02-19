var data = require('../userData.json');
exports.userdata = function (req, res) {
	console.log("userdata.userdata");
	var i
    for (i = 0; i < data["userData"].length; i++) {
        if (data["userData"][i].username == "gym") {
        	var newdata = data["userData"][i];
        	break;
        }           
    }   
	res.json(newdata);
}
