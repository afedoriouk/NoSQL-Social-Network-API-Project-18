const { User } = require("../models");

// /api/auth
const router = require("express").Router();

constUser = require("../models/User")


//users sign up
router.post("sign up", async (req,res)=>{

//generate new user here

    const user = await new User({
  //generate new password here      
        username:req.body,username,
        email:req.body.email,
        password:req.body.password,
    });
    await user.save();
    res.send("registered")
})
//save new user and return 
try{
    const user = await newUser.save();
    res.status(200).json(user);

}catch(err){
    console.log(err)


}


router.get("/", (req, res)=>{
    res.send("this is auth route")
})
//Login In 
router.post("login", async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("try again");
    }catch (err){
        console.log(err);
    }
});


module.export = router