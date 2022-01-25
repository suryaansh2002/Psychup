require("dotenv").config();
const express = require("express");

const InitiateMongoServer = require("./config/db");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const commentsRoute = require("./routes/comments");
const cookieParser = require("cookie-parser");
const testRoute = require("./routes/test.js");

const cors = require("cors");

InitiateMongoServer();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", function (req, res) {
  res.send("hello");
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/comments", commentsRoute);
app.use("/api/sentino", testRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
