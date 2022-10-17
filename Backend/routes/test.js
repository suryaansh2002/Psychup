const { response } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request-promise");
const axios = require("axios");
const token = process.env.SENTINO_API_KEY;

const testData = {
  inventories: ["big5"],
  facts: [
    {
      text: "I do just enough work to get by",
      response: "disagree",
    },
    {
      text: "I am always on the go",
      response: "agree",
    },
    {
      text: "I dislike changes",
      response: "disagree",
    },
  ],
};
router.get("/", (req, res) => {
  res.send("P Test Backend");
});

router.post("/", async(req, res) => {
  console.log(req.body);
  const data = req.body;
  console.log(data);
  console.log("Got from frontend... sending to sentino");
  await axios
    .post("https://api.sentino.org/score/facts", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 9020f914769a5b5b92870034c6b2caad65f03074",
      },
    })
    .then((response) => {

      const back=response.data.scoring;
      console.log(back);

      console.log("Got response front sentino.. sending back");
      res.status(200).json(back);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
