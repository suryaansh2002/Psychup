import React from "react";
import "./Home.css";
import { HashLink as Link } from "react-router-hash-link";
import leftimg from "../../images/img3.png";
import rightimg from "../../images/img4.png";
// import lineImg from "../../images/img5.png";
import logo from "../../images/logo.png";
export default function Home(props) {
  const handleLog = () => {
    props.setSide(true);
    props.setLogToggle(true);
  };
  return (
    <div className="home-main">
      {/* <div className="leftC"> */}
      <img src={leftimg} className="leftimage" />
      <img src={rightimg} className="rightimage" />
      {/* <img src={lineImg} className="lineimage" /> */}
      {props.cookie.user ? (
        <div></div>
      ) : (
        <button
          className="log-button"
          onClick={handleLog}
          data-toggle="modal"
          data-target="#logModal"
          className="login-button"
        >
          Enter Our Community
        </button>
      )}
      <img className="home-logo" src={logo} />{" "}
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>

        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="intro">
            <div className="intro-title">
              <h1>P, Redressal, Mental Health and Growth!</h1>
            </div>
            <div className="intro-line">
              Be it mental health, or be core Psychology, we have got it all
              covered!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
