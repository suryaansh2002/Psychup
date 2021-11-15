const router = require("express").Router();
const Comment = require("../models/Comment");

router.post("/", async (req, res) => {
  const { text, parentId, userId, username, postId } = req.body;
  console.log("In post route");
  const newComment = new Comment({
    body: text,
    username: username,
    userId: userId,
    parentId: parentId,
    postId: postId,
  });
  console.log(newComment);
  try {
    const savedComment = await newComment.save();
    console.log("savedComment");
    return res.status(200).json(savedComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const post = await Comment.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  try {
    console.log(comment);
    await comment.delete();
    res.status(200).json({ message: "Post has been deleted..." });
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE POST
router.put("/:id", async (req, res) => {
  const post = await Comment.findById(req.params.id);
  try {
    const updatedPost = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
