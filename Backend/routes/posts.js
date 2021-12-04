//this route is to manage posts by us
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post({
    imgSrc: req.body.imgSrc,
    title: req.body.title,
    desc: req.body.desc,
    author: req.body.author,
    categoryKey: req.body.categoryKey,
    categoryName: req.body.categoryName,
    hashContainer: req.body.hashContainer,
    duration: req.body.duration,
    date: req.body.date,
  });
  console.log(newPost);
  try {
    const savedPost = await newPost.save();

    return res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
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
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SINGLE POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POSTS FOR A USER
router.get("/:username", async (req, res) => {
  const username = req.params.username;
  try {
    let posts;
    if (username) {
      posts = await Post.find({
        username: {
          $in: [username],
        },
      });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POSTS FOR A CATEGORY
router.get("/:category", async (req, res) => {
  const catName = req.params.category;
  try {
    let posts;
    if (catName) {
      posts = await Post.find({
        categoryName: {
          $in: [catName],
        },
      });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
