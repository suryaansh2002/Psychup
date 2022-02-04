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
                about="Mental health refers to cognitive, behavioral, and emotional well-being. It is all about how people think, feel, and behave. Tune in, as we voyage on a journey to unravel some scientific facts that attempt to give mental health the importance it requires in the modern world. This is what Psychology stands for, your mental well being!"
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/gdp"} className="domain-link">
              <CarouselCard
                domain="Gender Diversity Psychology"
                about="Gender is increasingly understood as defining a system of power relations embedded in other power relations. Psychological research on gender—which has most often focused on analysis of sex differences, within-sex variability, and gender roles—has begun to incorporate this new understanding. Tune in, as we attempt to shatter all the societal taboos centered around gender and diversity."
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/iobp"} className="domain-link">
              <CarouselCard
                domain="Industrial/Organizational Behavioural Psychology"
                about="Psychology at workplaces!? Unexpected right? Well, not so! Industrial-organizational psychology is the branch of psychology that applies psychological theories and principles to organizations. Often referred to as I-O psychology, this field focuses on increasing workplace productivity and related issues such as the physical and mental well-being of employees."
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/cmp"} className="domain-link">
              <CarouselCard
                domain="Consumer/Marketing Psychology"
                about="What is meant by consumer behaviour ? Does there exist any uniformity in the behavior pattern of consumers? Consumer psychology refers to the processes used by clients and customers to select, purchase, use and discard products and services.In the business world, Consumer Psychology helps firms improve products, services and marketing strategies in order to bolster sales. Tune in to know more!"
              />
            </Link>
          </div>
          <div>
            <Link to={"/articles/pdpd"} className="domain-link">
              <CarouselCard
                domain="Psychology of Disorders and Preliminary Diagnosis"
                about="Psychological and mental health disorders are patterns of behavioral or psychological symptoms that impact multiple areas of life. These disorders create distress for the person experiencing these symptoms. We analyse these through a scientific perspective, hence, renouncing the vices of taboo and prejudice centered around them."
              />
            </Link>
          </div>
        </Slider>
      </div>

      <div></div>
    </div>
  );
}
