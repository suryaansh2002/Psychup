import React from "react";
import "./Home.css";
import { HashLink as Link } from "react-router-hash-link";
import img from "./home.png";
import leftimg from "../../images/img3.png";
import rightimg from "../../images/img4.png";
// import lineImg from "../../images/img5.png";

export default function Home() {
  return (
    <div className="home-main">
      {/* <div className="leftC"> */}
      <img src={leftimg} className="leftimage" />
      <img src={rightimg} className="rightimage" />
      {/* <img src={lineImg} className="lineimage" /> */}
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
              <h1>Psychology, Redressal, Mental Health and Growth!</h1>
            </div>
            <div className="intro-line">
              Be it mental health, or be core Psychology, we have got it all
              covered!
            </div>
            
          </div>
        </div>
      </div>

      {/* </div> */}

      {/* <div className="home-main">
        <div className="row">
          <div className="col-lg-12">
            {/* <div className="intro">

              <div className="intro-title">
                <h1>Psychology, Redressal, Mental Health and Growth!</h1>
                </div>
                <div className="intro-line">
                  Be it mental health, or be core Psychology, we have got it all
                  covered!
                </div>
                {/* <Link to={"/#domains-h"}>
                  {" "}
                  <button type="button" className="btn btn-primary explore">
                    Explore
                  </button>
                </Link> 
            </div> 

          </div>
          {/* <div className="col-lg-6">
            <img src={img} className="home-img"></img>
          </div> 
        </div>
      </div> */}
    </div>
  );
}
