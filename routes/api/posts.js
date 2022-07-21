const router = require("express").Router();
const Post = require("../models/Post")


///create post
router.post("/", async(req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savePost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})


///update post using put method

router.put("/:id", async(req,res)=>{
    const post = Post.findPostById(req.params.id);
    if (post.useId === req.body.userId){
        await post.updateOne({set:req.body});
        res.status(200).json("post has been updated")
    }else{
        res.status(404).json("post")
    }
    }
);


//delete post using delete method


router.delete("/:id", async(req,res)=>{
    const post = Post.findPostById(req.params.id);
    if (post.useId === req.body.userId){
        await post.deleteOne({set:req.body});
        res.status(200).json("post has been deleted")
    }else{
        res.status(404).json("deleted")
    }
    }
);

//get a post using get method

router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findPostById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;