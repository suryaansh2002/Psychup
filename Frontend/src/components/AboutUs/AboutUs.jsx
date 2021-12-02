import React from "react";
import "./Aboutus.css";
import services from "../../images/img10.png";
import articles from "../../images/img12.png";


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
                <div className="aboutus-text">
                  Psychology is the science of mind and behavior. Psychology
                  includes the study of conscious and unconscious phenomena,
                  including feelings and thoughts. It is an academic discipline
                  of immense scope, crossing the boundaries between the natural
                  and social sciences Psychology is the science of mind and
                  behavior. Psychology includes the study of conscious and
                  unconscious phenomena, including feelings and thoughts. It is
                  an academic discipline of immense scope, crossing the
                  boundaries between the natural and social sciences.{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 bc">
            <div className="serv-card">
              Articles
              <div className="serv-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                bibendum.
              </div>
            </div>
            <div className="serv-card">
              News
              <div className="serv-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                bibendum.
              </div>
            </div>
            <div className="serv-card">
              Personality Test
              <div className="serv-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                bibendum.
              </div>
            </div>
            {/* <div className="s-img-c">
            <img src={articles}  className="services-img"/>
            <img src={articles} className="services-img"/>
            <img src={articles}  className="services-img"/>
            
            </div> */}

            <img src={services}   className="serv-img" />

          </div>
        </div>
      </div>
    </div>
  );
}
