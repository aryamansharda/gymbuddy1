
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
                                     "username": String,
                                     "profileName": String,
                                     "spottingRange": String,
                                     "spottingSkill": Number,
                                     "runningRange": String,
                                     "runningSkill": Number,
                                     "monday": String,
                                     "tuesday": String,
                                     "wednesday": String,
                                     "thursday": String,
                                     "friday": String,
                                     "saturday": String,
                                     "sunday": String
});

exports.Profile = Mongoose.model('Profile', profileSchema);