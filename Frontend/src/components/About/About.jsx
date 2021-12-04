import React from "react";
import "./About.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    dragable: true,
    centerPadding: "100px",
    centerMode: true,
    pauseOnHover: false,
  };

  return (
    <div id="domains-h">
      <div className="about-main">
        <div className="main-content-container">
          <div className="main-title">
            <h2>Explore the vast Multitude of Psychological Domains</h2>
          </div>
          <div className="main-text">
            Do you think Psychology spans to only Mental Health? Well, you have
            come to the right place to delve into this multivaried domain.
          </div>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <Link to={"/articles/Gender"} className="domain-link">
                <CarouselCard
                  domain="Gender Psychology"
                  about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
                />
              </Link>
            </div>
            <div>
              <Link to={"/articles/Behaviour"} className="domain-link">
                <CarouselCard
                  domain="Behaviour Psychology"
                  about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
                />
              </Link>
            </div>
            <div>
              <Link to={"/articles/Mental"} className="domain-link">
                <CarouselCard
                  domain="Mental Health"
                  about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
                />
              </Link>
            </div>
            <div>
              <Link to={"/articles/domain4"} className="domain-link">
                <CarouselCard
                  domain="Domain 4"
                  about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
                />
              </Link>
            </div>
            <div>
              <Link to={"/articles/domain5"} className="domain-link">
                <CarouselCard
                  domain="Domain 5"
                  about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
                />
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
