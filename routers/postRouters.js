const express = require('express');
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.getPosts );

router.post("/create", postController.createPost);
router.get('/img', postController.showimg);
module.exports = router