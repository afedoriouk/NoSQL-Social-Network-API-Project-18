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
  getThoughtById({
    params }, res) {
    Thought.findOne({ _id: params.id })
      .select('_v')
      .sort({
        _id: -1
      })

      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'No thought with id!' });
        }
        res.json(dbThoughtData);
      })

      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  // create thought
  addThought({ body
  }, res) {
    Thought.create(body)

      .then((ThoughtData) => {
        return User.findOneAndUpdate(
          //current user reflecting a thought

          { _id: body.userId },
          { $addToSet: { thoughts: ThoughtData._id } },
          {
            new: true
          }
        );
      })

      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({
            message: 'No user with this id'
          });
          return;
        }
        res.json(dbUsersData)
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // update thought by using ID
  updateThought({
    params,
    body },

    res) {
    Thought.findOneAndUpdate({
      _id: params.thoughtId
    },
      { $set: body },
      { runValidators: true, new: true })

      .then((updateThought) => {
        if (!updateThought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json({ message: "Success" });
      })
      .catch(err => res.json(err));

  },
  // delete thought
  deleteThought({
    params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deleteThought) => {
        if (!deleteThought) {
          return res.status(404).json({
            message: 'No thought with this id!'
          });
        };


        // remove thought id from user's `thoughts` field
        return User.findOneAndUpdate(
          { thoughts: params.thoughtId },

          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {

          res.status(404).json({
            message: 'No thought with this id!'
          });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  
},

  // create reaction

  addReaction({
    params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },

      { $push: { reactions: body } },
      { runValidators: true }
    )
      .then(updateThought => {
        if (!updateThought) {
          res.status(404).json({ message: 'No reaction found with this id!' });
          return
        }
        res.json(updateThought);
      })
      .catch(err => res.json(err));
  },

    // delete reaction
    removeReaction({
      params
    }, res) {
        Thought.findOneAndUpdate({ 
          _id: params.thoughtId },

    { $pull: { reactions: { reactionId: params.reactionId } } },
    { new: true }
  )
    .then((Thought) => {
      if (!Thought) {
       res.status(404).json({ 
          message: 'No reaction with this id!' });
          return ;
      }
      res.json(Thought);
    })
    .catch(err => res.json(err));
    }
};


module.exports = thoughtController;
