const Post = require("../models/postModel");

const formidable = require("formidable")
const fs = require('fs');

exports.getPosts = (req,res) => {
    Post.find().then( (post) => {
        res.status(200).json({post})
    });

}

exports.createPost = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields,files) => {

        if(err){
            return res.status(400).json({
                error:"img cannot be uploaded"
            });
        }

        let post = new Post(fields);
        
        if(files.photo){
            post.photo.data = fs.readFileSync(files.photo.path);
            post.photo.contentType = files.photo.type;
        }
        post.save((err,result) => {
            if(err){
                res.status(403).json({error:err})
            }
            res.status(201).json(result)
        });

    });

}

exports.showimg = (req,res,next) => {
    Post.findById("5d15d6f716b9fc0bdc990f7f").then( post => {
        const p = post
        res.set(("Content-Type", p.photo.contentType));
        return res.send(p.photo.data);
    })
}