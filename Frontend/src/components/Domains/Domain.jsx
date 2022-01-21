import React, { useState, useEffect } from "react";
import "./Domain.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function About() {
  const [carSettings, setCarSettings] = useState();

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
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    dragable: true,
    centerPadding: "20px",
    pauseOnHover: false,
    centerMode: true,
  };
  var settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    dragable: true,
    centerPadding: "20px",
    pauseOnHover: false,
    centerMode: true,
  };
  useEffect(() => {
    window.innerWidth > 1000
      ? setCarSettings(settings)
      : window.innerWidth > 800
      ? setCarSettings(settings3)
      : setCarSettings(settings2);
  }, [window.innerWidth]);
  return (
    <div id="domains-h">
      <div className="domain-main">
        <div className="domain-title">
          <h2>Psychological Multiverse</h2>
          <div className="domain-text">
            Do you think Psychology spans to only Mental Health? Well, you have
            come to the right place to delve into this multivaried domain.
          </div>
        </div>

        <Slider {...carSettings}>
          <div>
            <Link to={"/articles/mhr"} className="domain-link">
              <CarouselCard
                domain="Mental Health and Rehabiliation"
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/gdp"} className="domain-link">
              <CarouselCard
                domain="Gender Diversity Psychology"
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/iobp"} className="domain-link">
              <CarouselCard
                domain="Industrial/Organizational Behavioural Psychology"
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/cmp"} className="domain-link">
              <CarouselCard
                domain="Consumer/Marketing Psychology"
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/pdpd"} className="domain-link">
              <CarouselCard
                domain="Psychology of Disorders and Preliminary Diagnosis"
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
              />
            </Link>
          </div>

          <div>
            <Link to={"/articles/ppid"} className="domain-link">
              <CarouselCard
                domain="Psychology of Personality and Individual Difference"
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus et turpis ac pulvinar. Integer ornare justo tincidunt mauris accumsan."
              />
            </Link>
          </div>
        </Slider>
      </div>

      <div></div>
    </div>
  );
}
