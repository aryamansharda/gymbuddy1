var models = require('../models');

exports.userdata = function (req, res) {
	console.log("userdata.userdata");
	var usrname = req.params.username;
	
	models.User
	.find()
	.where({"username":usrname})
	.exec(renderUserData);

	function renderUserData(err, userData) {
		res.json(userData);
	}
}
