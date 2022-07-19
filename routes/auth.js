const { User } = require("../models");

// /api/auth
const router = require("express").Router();

constUser = require("../models/User")


//users sign up
router.post("sign up", async (req,res)=>{

    const user = await new User({
        username:"Alex",
        email:"alex@gmail.com",
        password:"987654"
    })
    await user.save();
    res.send("registered")
})
router.get("/", (req, res)=>{
    res.send("this is auth route")
})



module.export = router