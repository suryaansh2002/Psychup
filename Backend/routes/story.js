const router = require("express").Router();
const User = require("../models/User");
const Story = require("../models/Story");


router.get("/", async (req, res) => {
    try {
      const stories = await Story.find();
      res.status(200).json(stories);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //CREATE POST
  router.post("/", async (req, res) => {
      const {name,title,imgUrl,content}=req.body
    const newStory = new Story({
        name,
        title,
        imgUrl,
        content
    });
    console.log(newStory);
    try {
      const savedStory = await newStory.save();
  
      return res.status(200).json(savedStory);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
