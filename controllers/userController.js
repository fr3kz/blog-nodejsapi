const User = require("../models/userModel");

exports.getUsers = (req,res) => {
    User.find().then(users => {
        res.status(200).json({users})
    })
}

exports.login = (req,res) => {

}