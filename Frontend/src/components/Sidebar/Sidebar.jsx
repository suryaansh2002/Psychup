import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

import "./Sidebar.css";
import { ImCross } from "react-icons/im";

export default function Sidebar(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [suError, setSUError] = useState(false);
  const [suSucess, setSUSuccess] = useState(false);
  const [suMsg, setSUMsg] = useState("");
  const [logError, setLogError] = useState(false);
  const [logSucess, setLogSuccess] = useState(false);
  const [logMsg, setLogMsg] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function funcLog() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        setLogMsg("Logged in Sucessfully");
        resolve();
      });
    });
  }

  function funcSig() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        setSUMsg("Signed up successfully");
        resolve();
      });
    });
  }

  function func2() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        props.setSide(false);
        resolve();
      }, 2000);
    });
  }

  function toggleform() {
    props.setLogToggle(!props.logToggle);
  }
  const url = "http://localhost:5000";
  // Can replace this url of wherever backend deployed so that dont have
  // to replace it everywhere
  let history = useHistory();

  function handleLogin() {
    const data = {
      email,
      password,
    };
    console.log(data);
    axios
      .post(url + "/api/auth/login", data)
      .then((res) =>
        res.data.status === "email error"
          ? (console.log(res.data.error),
            setLogMsg(res.data.error),
            setEmailErr(true),
            setPassErr(false))
          : res.data.status === "pass error"
          ? (console.log(res.data.error),
            setLogMsg(res.data.error),
            setEmailErr(false),
            setPassErr(true))
          : res.data.status === "success"
          ? (funcLog().then(func2),
            props.setCookie("user", res.data.data),
            setLogError(false),
            setEmailErr(false),
            setPassErr(false),
            setLogSuccess(true))
          : null
      )
      .catch((err) => console.log(err.message));
  }
  function handleSignup() {
    const data = {
      name,
      email,
      password,
    };
    axios
      .post(url + "/api/auth/signup", data)
      .then((res) =>
        res.data.status === "name error"
          ? (setSUMsg(res.data.error),
            setNameErr(true),
            setEmailErr(false),
            setPassErr(false))
          : res.data.status === "email error"
          ? (setSUMsg(res.data.error),
            setEmailErr(true),
            setNameErr(false),
            setPassErr(false))
          : res.data.status === "pass error"
          ? (setSUMsg(res.data.error),
            setPassErr(true),
            setNameErr(false),
            setEmailErr(false))
          : res.data.status === "success"
          ? (funcSig().then(func2),
            setSUError(false),
            setPassErr(false),
            setNameErr(false),
            setEmailErr(false),
            setSUSuccess(true),
            props.setCookie("user", res.data.data))
          : null
      )
      .catch((err) => console.log(err.message));
  }

  return (
    <div
      className={props.side ? "sidebar-container isopen" : "sidebar-container"}
    >
      <div className="content-container">
        {props.logToggle ? (
          <div className="upper-div">
            <button className="cross" onClick={() => props.setSide(false)}>
              <a>
                <ImCross />
              </a>
            </button>
            <div className="change-form">
              New to ___ ? <button onClick={toggleform}>Register</button>
            </div>
            <div className="welcome">Welcome back</div>
            {logSucess && logMsg != "" ? (
              <div className="success">{logMsg}</div>
            ) : null}

            <form className="form-contact" method="POST" name="myForm">
              <div className="form-label">
                <label>Email:</label>
              </div>
              <div className="input-div">
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {emailErr && logMsg != "" ? (
                  <div className="error">{logMsg}</div>
                ) : null}
              </div>
              <div className="form-label">
                <label>Password:</label>
              </div>
              <div className="input-div">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                {passErr && logMsg != "" ? (
                  <div className="error">{logMsg}</div>
                ) : null}
              </div>
              <div>
                <button
                  className="submit-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="or">OR</div>
            <div>Add Login with google button here</div>
          </div>
        ) : (
          <div className="upper-div">
            <button className="cross" onClick={() => props.setSide(false)}>
              <a>
                <ImCross />
              </a>
            </button>
            <div className="change-form">
              Already a user? <button onClick={toggleform}>Login</button>
            </div>
            <div className="welcome">Welcome</div>
            {suSucess && suMsg != "" ? (
              <div className="success">{suMsg}</div>
            ) : null}

            <form className="form-contact" method="POST">
              <div className="form-label">
                <label>Name:</label>
              </div>
              <div className="input-div">
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                {nameErr && suMsg != "" ? (
                  <div className="error">{suMsg}</div>
                ) : null}
              </div>

              <div className="form-label">
                <label>Email:</label>
              </div>
              <div className="input-div">
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {emailErr && suMsg != "" ? (
                  <div className="error">{suMsg}</div>
                ) : null}
              </div>
              <div className="form-label">
                <label>Password:</label>
              </div>
              <div className="input-div">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                {passErr && suMsg != "" ? (
                  <div className="error">{suMsg}</div>
                ) : null}
              </div>
              <div>
                <button
                  className="submit-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignup();
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="or">OR</div>
            <div>Add Login with google button here</div>
          </div>
        )}
      </div>
    </div>
  );
}
