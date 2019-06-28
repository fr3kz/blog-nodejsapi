const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        data: Buffer,
        contentType:String
    },
    created:{
        type: Date,
        default: Date.now
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Post",postSchema);