import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

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
  return (
    <>
      <Navbar variant="light" expand="lg" className="nav-main">
        <Navbar.Brand href="/" className="navbar-header"></Navbar.Brand>
        <Navbar.Toggle
          className="nav-button"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-box">
            <Nav.Link href="/" className="nav-link">
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#domains-h" className="nav-link">
              <Link to={"/#domains-h"}> Domains</Link>
            </Nav.Link>
            <Nav.Link href="#about-h" className="nav-link">
              <Link to={"/#about-h"}> About</Link>
            </Nav.Link>
            <Nav.Link href="#articles-h" className="nav-link">
              <Link to={"/#articles-h"}>Articles</Link>
            </Nav.Link>
            <Nav.Link href="#contact-h" className="nav-link">
              <Link to={"/#contact-h"}>Contact</Link>
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
            <div>
              <button className="log-button" onClick={handleLog}>
                Login
              </button>
              <button className="reg-button" onClick={handleReg}>
                Register
              </button>
            </div>
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
                  className="btn btn-primary top-button"
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
                className="btn btn-primary top-button-2"
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
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Apply to contribute to <span className="psych">PsychUp!</span>
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
                <div className="modal-text">
                  Mention in brief how you think you can contribute to{" "}
                  <span className="psych">PsychUp</span> and look forward to
                  hearing from us at the earliest!
                </div>
                <textarea className="modal-text-area" rows="5"></textarea>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn send-modal btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
