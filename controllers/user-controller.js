const { json } = require("express");
const { User, Thought } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})

      .populate({
        path:"friends",
       select: "-__v",}) //allows removing __v attributes
       .select("-_v")

//sort by ID
.sort({_id:-1})

      .then((dbUserData) => { res.json(dbUserData);})
      
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  },


  // get single user by id

  getSingleUserById({params}, res) {
    User.findOne({ _id: params.id })
    
      .populate({
path:"friends",
select:"-__v",
      })
      
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
          .status(404).json({ message: 'No user with this id!' });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.
        status(400).json(err);
      });
  },
  // create a new user
  createUser({body}, res) {
    User.create(body)
      .then((dbUserData) => {res.json(dbUserData);
      })
      .catch((err) => { res.json(err);
        console.log(err);
       
      });
  },
// update a user

//delete user thoughts with that user

}

// add friends to friend list


// remove friend from friend list



module.exports = userController;
