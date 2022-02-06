import React from "react";
import "./Articles.css";
import { AiFillClockCircle, AiFillTrophy } from "react-icons/ai";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function ArticleCard(props) {
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

  return (
    <Link to={`/article/${props.id}/${props.title.replaceAll(' ','_')}`} className="domain-link">
      <div className="article-card">
        <div className="img-d">
          <img src={props.imgSrc} id="card-img"></img>
        </div>
        <div id="card-title">{props.title}</div>
        <div className="card-category">Domain: {props.categoryName}</div>
        <div className="card-by">-by {props.author}</div>
       
        <div className="card-content">{props.desc}</div>
      </div>
    </Link>
  );
}