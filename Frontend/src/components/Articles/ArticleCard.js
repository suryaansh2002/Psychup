import React from "react";
import "./Articles.css";
import { AiFillClockCircle, AiFillTrophy } from "react-icons/ai";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function ArticleCard(props) {
  return (
    <Link to={`/article/${props.id}`} className="domain-link"> 
      <div className="article-card" style={{ backgroundColor: "white" }}>
        <img src={props.imgSrc} className="card-img"></img>
        <div className="card-title">{props.title}</div>
        <div className="card-category">Domain: {props.categoryName}</div>
        <div className="card-by">-by {props.author}</div>
        <div className="card-duration">
          <AiFillClockCircle className="clock" />
          {props.duration} min read
        </div>
        <div className="card-date">{props.date}</div>
        <div className="card-content">{props.desc}</div>
      </div>
      </Link>
  );
}
