const moongose = require("mongoose");

const userschema = new moongose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
});

module.exports = moongose.model("User",userschema);