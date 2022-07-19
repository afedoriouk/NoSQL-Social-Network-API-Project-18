// const require ("mongoose")

const { Schema, model } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max:30
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max:60
    },
    
    friends: [
      {
        type: Array,
        default:[],
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema('friendCount').get(function () {
  return this.friends.length;
});



module.exports = mongoode.model("User", userSchema);
