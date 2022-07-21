
const { User, Thought } = require("../models");
const { json } = require("express");

const userController = {

  createUsers({body},res){
    User.create(body)
    .then(usersDataDb => res.json(usersDataDb))
    .catch(err=>res.status(400).json(err));

  }}


//   get all users

getAllUser(req, res) ;{
  User.find({})
  //populate users friends 
    .populate({path: "friends", select: "-__v",})
        //populate users thoughts 
    .populate({path: "thoughts", select: "-__v",
  })
    .select("-__v")
    // .sort({ _id: -1 })
    .then((usersDataDb) => res.json(usersDataDb))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
}

// sort by ID
// get single user by id
// create a new user
// update a user
// get one user by id

  getUserById({ params }, res) ;{
    User.findOne({ _id: params.id })
      .populate({ path: "thoughts", select: "-__v",})
      .populate({path: "friends",select: "-__v" })
      .select("-__v")

//If no user is found return err

      .then((usersDataDb) => {
        if (!usersDataDb) {
         
          res.status(404)
            .json({ message: "No user found with this id!" });
            return ;
        }
        res.json(usersDataDb);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  }
  // create user
  createUser({ body }, res) ;{
    Users.create(body)

      .then((userDataDb) => res.json(userDataDb))
      .catch((err) => res.status(400).json(err));
  }
  // update user by id
  updateUser({ params, body }, res);{
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((userDataDb) => {
        if (!userDataDb) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(userDataDb);
      })
      .catch((err) => res.json(err));
  }
 
  // add friend
  addFriend({ params }, res) ;{
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((userDataDb) => {
        if (!userDataDb) {
          res.status(404).json({ message: "No user with this id" });
          return;
        }
        res.json(userDataDb);
      })
      .catch((err) => res.json(err));
  }
  // delete a friend
  deleteFriend({ params }, res) ;{
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((userDataDb) => {
        if (!userDataDb) {
         res.status(404).json({ message: "No user with this id!" });
         return;
        }
        res.json(userDataDb);
      })
      .catch((err) => res.json(err));
  }


module.exports = userController;
