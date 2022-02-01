import React from "react";
import "./Aboutus.css";
import services from "../../images/img10.png";
import articles from "../../images/img14.png";
import news from "../../images/img15.png";
import brain from "../../images/img30.png";

export default function AboutUs() {
  return (
    <div id="about-h">
      <div className="aboutus-main">
        <div className="aboutus-title">
          <h2>
            About <span className="psych">PsychUp!</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6  temp">
            <div className="about-container">
              <div className="c-2">
                Psychology is the science of mind and behavior. Psychology
                includes the study of conscious and unconscious phenomena,
                including feelings and thoughts. It is an academic discipline of
                immense scope, crossing the boundaries between the natural and
                social sciences.
                <br />
                <br /> Psychology is the science of mind and behavior.
                Psychology includes the study of conscious and unconscious
                phenomena, including feelings and thoughts. It is an academic
                discipline of immense scope, crossing the boundaries between the
                natural and social sciences.{" "}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img src={brain} className="brain-img" />
            <div className="services-h">OUR SERVICES</div>
          </div>
        </div>
      </div>
    </div>
  );
}
