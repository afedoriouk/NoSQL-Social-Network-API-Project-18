const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            require:true
        },
        description:{
            type:String,
            max:300,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
          },
        },
          {
            toJSON: {
              getters: true
            },
            id: false
          }
    
);

module.exports = PostSchema;