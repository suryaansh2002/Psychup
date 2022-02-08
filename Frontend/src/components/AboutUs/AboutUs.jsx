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
        <div className="row content">
          <div className="col-lg-6  temp">
            <div className="about-container">
              <div className="c-2">
                PsychUp! is a platform, which aims to promulgate the multivaried
                ideas and aspects of Psychology , from a scientific point of
                view. Psychology is not just about "mental health", it is far
                more than that. Bringing these principles to light would
                substantiate the power of mind, and its subsequent effects on
                our day to day lives. Whether it be a social setting such as an
                office workplace, or be the Great Gender Divide, Psychology
                extends its scientific fundamentals omnipotently. Come join us,
                as we embark on a journey to unravel the deepest and the most
                interesting issues, which might seem small at first sight, but
                in reality, serve a bigger societal purpose!
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
