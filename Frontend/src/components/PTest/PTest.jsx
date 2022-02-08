import React from "react";
import "./PTest.css";
import im1 from "../../images/img31.png";
import im2 from "../../images/img32.png";
import im3 from "../../images/img33.png";

export default function PTest() {
  return (
    <div className="ptest-main">
      <div className="ptest-heading">Take Our Personality Test Now!</div>
      <div className="ptest-sub">
        Kickstart personality growth and know who you really are!
        <br />
        Take our personality test now!
      </div>
      <div className="ptest-c">
        <div className="ptest-card" id="ptest1">
          <div className="p-img">
            <img className="ptest-img" src={im1}></img>
          </div>
          <div className="ptest-h">Complete the Test</div>
          <div className="ptest-content">
            Be yourself and answer honestly to find out your personality type.
          </div>
        </div>
        <div className="ptest-card">
          <div className="p-img">
            <img className="ptest-img" src={im2}></img>
          </div>
          <div className="ptest-h">View Detailed Results</div>
          <div className="ptest-content">
            Learn how your personality type influences many areas of your life.
          </div>
        </div>
        <div className="ptest-card">
          <div className="p-img">
            <img className="ptest-img" src={im3}></img>
          </div>
          <div className="ptest-h">Unlock Your Potential</div>
          <div className="ptest-content">
            Use the detailed analysis of your profile to unlock your true
            potential in life
          </div>
        </div>
      </div>
      <div>
        <a href="/personality">
          <button className="pt-btn">Take Test</button>
        </a>
      </div>
    </div>
  );
}
