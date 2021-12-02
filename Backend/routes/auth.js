const express = require("express");
const router = express.Router();
const Users = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwt_decode = require("jwt-decode");

const JWT_SECRET = "certmanjwtsecret";

const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  try {
    res.json({ message: "Welcome to user" });
  } catch (err) {
    console.log(err);

    res.json({ message: err });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || typeof email !== "string" || email.indexOf("@") == -1) {
    return res.json({ status: "email error", error: "Enter a valid email id" });
  }
  if (!password || typeof password !== "string") {
    return res.json({ status: "pass error", error: "Enter a valid password" });
  }

  const user = await Users.findOne({ email }).lean();

  if (!user) {
    return res.json({
      status: "email error",
      error: "User does not exist!",
      data: "",
    });
  } else {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          id: user._id,
          name: user.name,
          email: user.email,
          editorial:user.editorial
        },
        JWT_SECRET
      );
      var payload = jwt_decode(token);

      return res.json({ status: "success", error: "", data: payload });
    } else {
      return res.json({
        status: "pass error",
        error: "Incorrect Password",
        data: "",
      });
    }
  }
});
router.post("/signup", async (req, res) => {
  const { name, email, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    if (!name || typeof name !== "string") {
      return res.json({ status: "name error", error: "Enter a valid name" });
    }
    if (!email || typeof email !== "string" || email.indexOf("@") == -1) {
      return res.json({ status: "email error", error: "Enter a valid email" });
    }

    if (!plainTextPassword || typeof plainTextPassword !== "string") {
      return res.json({ status: "pass error", error: "Enter Password" });
    }
    if (plainTextPassword.length < 6) {
      return res.json({
        status: "pass error",
        error: "Password should be atleast 6 characters long.",
      });
    }
    const response = await Users.create({
      name,
      email,
      password,
    });
    const user={
      name,
      email,
    }
    return res.json({ status: "success", error: "",data:user });
  } catch (error) {
    console.log(error)
    if ((error.code = 11000)) {
      
      return res.json({ status: "email error", error: "Email ID already used." });
    }
    throw error;
  }
});

router.post("/forgot", async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ email }).lean();
  if (!user) {
    return res.json({
      status: "error",
      error: "User does not exist!",
      data: "",
    });
  } else {
    const secret = JWT_SECRET + user.password;
    const payload = {
      email: user.email,
      id: user._id,
    };
    const token = jwt.sign(payload, secret, { expiresIn: "15m" });

    const link = `http://localhost:3000/reset/${user._id}/${token}`;

    let transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "temp_certman@outlook.com",
        pass: "123@ABC@abc",
      },
    });

    const options = {
      from: "temp_certman@outlook.com",
      to: email,
      subject: "Reset Certman Password",
      text: `Reset your password at ${link}`,
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      res.json({ status: "success", error: "", data: "" });
    });
  }
});

router.patch("/reset", async (req, res) => {
  const { id, token, pass } = req.body;
  const user = await Users.findOne({ id }).lean();
  if (!user) {
    return res.json({
      status: "error",
      error: "User does not exist!",
      data: "",
    });
  } else {
    try {
      const secret = JWT_SECRET + user.password;
      const hash_password = await bcrypt.hash(pass, 10);
      const updatedUser = await Users.updateOne(
        { _id: id },
        {
          $set: {
            password: hash_password,
          },
        }
      );
      res.json({ status: "success", error: "", data: "" });
    } catch (error) {
      res.json({ status: "error", error: error.message, data: "" });
    }
  }
});

module.exports = router;
