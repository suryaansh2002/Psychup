const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      default: "",
    },

    imgUrl: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// export model user with UserSchema
module.exports = mongoose.model("Story", StorySchema);
