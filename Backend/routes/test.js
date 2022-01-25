const express = require("express");
const router = express.Router();
const request = require("request-promise");

const token = process.env.SENTINO_API_KEY;

const data = {
  facts: [
    {
      item: "I do just enough work to get by",
      response: "disagree",
    },
    {
      item: "I am always on the go",
      response: "agree",
    },
    {
      item: "I dislike changes",
      response: "disagree",
    },
  ],
  profile: { inventories: ["big5"], indices: ["withdrawal"] },
};

router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body;
  const options = {
    method: "POST",
    uri: "https://sentino.org/api/v2/person/profile",
    body: data,
    json: true,
    headers: {
      "cache-control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
    },
  };

  request(options)
    .then(function (response) {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
