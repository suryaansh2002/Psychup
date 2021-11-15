import React from "react";
import "./Aboutus.css";
import img from './PsychFields.png'

export default function AboutUs() {
  return (
    <div id="about-h">
      <div className="aboutus-main">
      <div className="row">
        <div className="col-lg-6">
        <div className="aboutus-text">
          <div className="aboutus-title">
            <h2>
              About <span className="psych">PsychUp!</span>
            </h2>
          </div>
          <div className="aboutus-text">
            Psychology is the science of mind and behavior. Psychology includes
            the study of conscious and unconscious phenomena, including feelings
            and thoughts. It is an academic discipline of immense scope,
            crossing the boundaries between the natural and social sciences
          </div>
        </div>

        </div>
        <div className="col-lg-6">
          <img src={img} className="home-img"/>
        </div>

      </div>
      </div>
    </div>
  );
}
