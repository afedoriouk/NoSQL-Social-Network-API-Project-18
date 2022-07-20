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
// deleteUser({ params }, res);
// {
//   Thought.deleteMany({ userId: params.id })
//     .then(() => {
//       User.findOneAndDelete({ userId: params.id }).then((dbUserData) => {
//         if (!dbUserData) {
//           res.status(404).json({ message: "User Deleted Successfully" });
//           return;
//         }
//         res.json(dbUserData);
//       });
//     })
//     .catch((err) => res.json(err));
// }
// // delete User
// deleteUser({ params }, res);
// {
//   User.findOneAndDelete({ _id: params.id })
//     .then((dbUserData) => res.json(dbUserData))
//     .catch((err) => res.json(err));
//   return;
}

// add friends to friend list
// addToFriendList({ params }, res);
// {
//   User.findOneAndUpdate(
//     { _id: params.userId },
//     { $push: { friends: params.friendId } },
//     { new: true }
//   )

//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user with this id!" });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// }

// remove friend from friend list

// deleteFriend({ params }, res);
// {
//   User.findOneAndDelete(
//     { _id: params.thoughtId },
//     { $pull: { friends: params.friendId } },
//     { new: true }
//   )
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user with this id!" });

//         return;
//       }
//       res.json(dbUserData);
//     })

//     .catch((err) => res.status(400).json(err));
// }

// module.exports = userController;
