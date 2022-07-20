const { Thought,
  User
} = require('../models');

const thoughtController = {

  // get all thoughts
  getThoughts(req, res) {
    Thought.find({})

      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single thought by id
  


  // create thought
  

  // update thought by using ID
  
  // delete thought


        // remove thought id from user's `thoughts` field
   

  // create reaction


}
module.exports = thoughtController;
