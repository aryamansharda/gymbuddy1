var data = require('../userData.json');

exports.viewDashboard = function (req, res) {
    var newData = {"userProfile":[]};
    var add;
    var i;
    var j;
    for (i = 0; i < data["userData"].length; i++)
    {
        for (j = 0; j < data["userData"][i]["profiles"].length; j++)
        {
            add = {"name":data["userData"][i].name, "profile":data["userData"][i]["profiles"][j]};
            console.log(data["userData"][i]["profiles"][j]);
            newData["userProfile"].push(add);
        }
    }
    
    console.log(newData);
	res.render('dashboard',newData);
}