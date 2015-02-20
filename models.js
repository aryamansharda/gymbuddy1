
var Mongoose = require('mongoose');

var userSchema = new Mongoose.Schema({
    // fields are defined here
                                        "name": String,
                                        "age": Number,
                                        "gender": String,
                                        "contact": String,
                                        "username": String,
                                        "password": String
});

exports.User = Mongoose.model('User', userSchema);

var profileSchema = new Mongoose.Schema({
                                     // fields are defined here
                                     "name": String,
                                     "profileName": String,
                                     "spottingRange": String,
                                     "spottingSkill": Number,
                                     "runningRange": String,
                                     "runningSkill": Number,
                                     "MondayStart": Time,
                                     "MondayEnd": Time,
                                     "TuesdayStart": Time,
                                     "TuesdayEnd": Time,
                                     "WednesdayStart": Time,
                                     "WednesdayEnd": Time,
                                     "ThursdayStart": Time,
                                     "ThursdayEnd": Time,
                                     "FridayStart": Time,
                                     "FridayEnd": Time,
                                     "SaturdayStart": Time,
                                     "FridayEnd": Time,
                                     "SundayStart": Time,
                                     "SaturdayEnd": Time
});

exports.Profile = Mongoose.model('Profile', profileSchema);