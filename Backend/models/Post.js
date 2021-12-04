const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    imgSrc: {
      type: String,
      // required: true,
      unique: false,
    },
    title: {
      type: String,
      required: true,
      unique: false,
    },

    desc: {
      type: String,
      required: true,
      unique: false,
    },

    author: {
      type: String,
      required: false,
      unique: false,
    },

    likeCount: {
      type: Number,
      default: 0,
      unique: false,
    },
    categoryKey: {
      type: String,
      required: false,
      unique: false,
    },
    categoryName: {
      type: String,
      required: false,
      unique: false,
    },
    hashContainer: {
      type: [String],
      required: false,
      unique: false,
    },
    duration: {
      type: Number,
      default: 0,
      unique: false,
    },
    date: {
      type: String,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

// export model user with UserSchema
module.exports = mongoose.model("Post", PostSchema);
