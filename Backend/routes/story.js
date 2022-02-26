const router = require("express").Router();
const User = require("../models/User");
const Story = require("../models/Story");
let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  { v4: uuidv4 } = require("uuid");

const DIR = "./story-imgs/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.get("/", async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE POST
router.put("/", async (req, res) => {
  const { imgId, name, title, content } = req.body;

  try {
    const updatedStory = await Story.updateOne(
      { _id: imgId },
      { $set: { name: name, title: title, content: content } }
    );

    res.status(200).json(updatedStory);
    console.log(updatedStory);
    console.log("Done");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Upload image for the post
router.post("/img-upload", upload.single("imgFile"), (req, res, next) => {
  if (req.file === undefined)
    return res.status(404).send("You must select a file.");
  const url = req.protocol + "://" + req.get("host");
  const image = new Story({
    _id: new mongoose.Types.ObjectId(),
    imgUrl: url + "/story-imgs/" + req.file.filename,
  });
  image
    .save()
    .then((result) => {
      res.json(result);
      
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

module.exports = router;

