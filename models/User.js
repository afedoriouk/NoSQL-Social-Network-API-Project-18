const require = ("mongoose")

const { Schema, model } = require('mongoose');

const mongoose = require("mongoose");
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
        reference: 'User',
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


module.exports = mongoose.model("User", userSchema);

