const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
    },

    parentId: {
      type: String,
      default: null,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export model user with UserSchema
module.exports = mongoose.model("Comments", CommentSchema);
