//Require thoughts and users

const { Thought,
  User
} = require('../models');

//controller for thoughts
const thoughtsController = {

  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
.populate({path:'reaction'})
.select('-_v')

      .then(thoughtsDataDb => res.json(thoughtsDataDb))
      .catch(err => {

        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single thought by id
  
  // create thought


}
module.exports = thoughtsController;



