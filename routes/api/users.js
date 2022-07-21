const router = require('express').Router();
const router = require("../model/User")

const {getUsers,getSingleUser} = require('../../controllers/user-controller');
const {createUser,updateUser} = require('../../controllers/user-controller');
const {deleteUser,addFriend,removeFriend} = require('../../controllers/user-controller');


const User = require('../models/User');


//update user routes
router.put("/:id", async(req,res)=>{
    if(req.body.userId===req.params.id){ 
}else{
    return res.status(404).json("Update your account");
}
})
//delete users
router.delete("/:id", async(req,res)=>{
    if(req.body.userId===req.params.id){ 
    
    try{
        await User.findUserByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
    }catch (err){ return res.status(500).json(err)};
    }else{
        return res.status(404).json("Delete only your account");
        
    }
}
);
//get single user

router.get("/:id", async (req,res)=>{
    try{
        const user = User.findUserById(req.params.id);
res.status(200).json(user);

    } catch (err){
        res.status(500).json(err);

    }
});

//delete user using delete method


//update user
router.put("/:id", async(req,res)=>{
if (req.body.userId===req.params.id){
    try{
        await User.findUserByIdAndUpdate(req.params.id);
        res.status(200).json("Your account has been updated")
    }catch (err){
        res.status(403).json(err);
    }
}
})


//add a Friend
router.put("/:id/addFriend", async (req,res)=>{
    if (req.body.userId !== req.params.id){
        try{
            const user = await User.findUserById(req.params.id);
            const currentUser = await User.findUserById(req.body.userId);

            if(!currentUser.addFriend.includes(req.body.userId)){
await user.updateUser({push:{addFriend:req.body.userId}});
await currentUser.updateUser({push:{addFriend:req.body.userId}});
            }else{
                res.status(404).json("You are already a friend")
            }
        }catch (err){
            res.status(500).json(err);
        }
        }
    }
);
//delete a friend


// /api/users
// router.get("/", (req, res)=>{
//     res.send("this is user route")
// })


// router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);






module.exports = router;
