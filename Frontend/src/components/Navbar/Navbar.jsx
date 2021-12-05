import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Sidebar.css";
import "./Navbar.css";
import logo from '../../images/logo.png'
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

import { HashLink as Link2 } from "react-router-hash-link";

export default function NavBar(props) {
  const [toggleInit, setToggleInit] = useState(false);
  const handleLog = () => {
    props.setSide(true);
    props.setLogToggle(true);
  };

  const handleReg = () => {
    props.setSide(true);
    props.setLogToggle(false);
  };
  const toggleInitials = () => {
    setToggleInit(!toggleInit);
  };
  const getInitials = (name) => {
    let initials = name.split(" ");

    if (initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      initials = name.substring(0, 2);
    }

    return initials.toUpperCase();
  };

  const handleLogout = async () => {
    await props.removeCookie("user");
    try {
      window.location.reload();
    } catch (error) {}
  };
  useEffect(() => {
    props.setSide(true);
    props.setSide(false);
  }, []);

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
    <>
      <Navbar variant="light" expand="lg" className="nav-main">
        <Navbar.Brand href="/" className="navbar-header"><img className="nav-logo" src={logo}></img></Navbar.Brand>
        <Navbar.Toggle
          className="nav-button"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-box">
            <Nav.Link href="/" className="nav-link">
              <Link2 className="n-l" to={"/"}>
                Home
              </Link2>
            </Nav.Link>
            <Nav.Link href="#domains-h" className="nav-link">
              <Link2 className="n-l" to={"/#domains-h"}>
                {" "}
                Domains
              </Link2>
            </Nav.Link>
            <Nav.Link href="#about-h" className="nav-link">
              <Link2 className="n-l" to={"/#about-h"}>
                {" "}
                About
              </Link2>
            </Nav.Link>
            <Nav.Link href="#articles-h" className="nav-link">
              <Link2 className="n-l" to={"/#articles-h"}>
                Articles
              </Link2>
            </Nav.Link>
            <Nav.Link href="#contact-h" className="nav-link">
              <Link2 className="n-l" to={"/#contact-h"}>
                Contact
              </Link2>
            </Nav.Link>
            <Nav.Link href="#contact-h" className="nav-link">
              <Link className="n-l" to={"/team"}>
                Team
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="nav-logreg">
          {props.cookie.user ? (
            <div>
              <button
                className="initials-button"
                onClick={() => toggleInitials()}
              >
                {getInitials(props.cookie.user.name)}
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </Nav>
      </Navbar>

      {toggleInit ? (
        <div className="initials-container">
          {props.cookie.user.editorial ? (
            <div>
              <Link to={"/editor"} target="_blank">
                <button
                  type="button"
                  className="btn  top-button"
                  onClick={() => toggleInitials()}
                >
                  Add an Article
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <button
                type="button"
                className="btn  top-button-2"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Apply to become a Contributor
              </button>
            </div>
          )}

          <button
            type="button"
            className="btn logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : null}

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" id="m-c">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                {/* Apply to contribute to <span className="psych">PsychUp!</span> */}
                Your Contribution Can Bring About Change 😄
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="https://formsubmit.co/contact@psychup.com">
              <input
                type="hidden"
                name="_subject"
                value="Contribute form Submission!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              {props.cookie.user ? (
                <div className="hide">
                  <input
                    type="email"
                    name="email"
                    value={props.cookie.user.email}
                  ></input>
                  <input
                    type="text"
                    name="name"
                    value={props.cookie.user.name}
                  ></input>
                </div>
              ) : null}

              <div class="modal-body">
                {/* <div className="modal-text">
                  Mention in brief how you think you can contribute to{" "}
                  <span className="psych">PsychUp</span> and look forward to
                  hearing from us at the earliest!
                </div> */}
                <textarea
                  className="modal-text-area"
                  rows="5"
                  placeholder="Brief Your Ideas..."
                ></textarea>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn send-modal ">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="logModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="logModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          {props.logToggle ? (
            <div class="modal-content">
              <br />
              <h5 class="modal-title" id="exampleModalLongTitle">
                Login
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-body">
                {logSucess && logMsg != "" ? (
                  <div className="success">{logMsg}</div>
                ) : null}

                <form className="form-contact" method="POST" name="myForm">
                  {/* <div className="form-label">
                <label>Email:</label>
              </div> */}
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
                  {/* <div className="form-label">
                <label>Password:</label>
              </div> */}
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
                  <div className="submit-c">
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
                <div className="modal-link-c">
                  New to PsychUp?{" "}
                  <a className="" onClick={() => props.setLogToggle(false)}>
                    <span className="modal-link">Register Now!</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div class="modal-content">
              <br />
              <h5 class="modal-title" id="exampleModalLongTitle">
                Sign Up
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="modal-body">
                {suSucess && suMsg != "" ? (
                  <div className="success">{suMsg}</div>
                ) : null}

                <form className="form-contact" method="POST">
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
                  <div className="submit-c">
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
                <div className="modal-link-c">
                  Already a user?{" "}
                  <a className="" onClick={() => props.setLogToggle(true)}>
                    <span className="modal-link">Login Now!</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
