const router = require("express").Router();
const Post = require("../models/Post")


///create post
router.post("/", async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savePost = await newPost.save();
        res.status(200)
    }catch(err){
        res.status(500).json(err)
    }
})


///update post

//delete post