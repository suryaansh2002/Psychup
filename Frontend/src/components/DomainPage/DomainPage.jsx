import { React, useState, useEffect } from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import ArticleCard from "../Articles/ArticleCard";
import "../Articles/Articles.css";
import "./DomainPage.css";
import { details } from "./details";
export default function DomainPage() {
  const [articleList, setArticleList] = useState([]);
  const [domainName, setDomainName] = useState("");

  const splitArr = window.location.pathname.split("/");
  const domain = splitArr[2];
  console.log(domain);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/")
      .then((response) => {
        setArticleList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [domain]);
  const map = {
    mhr: "Mental Health and Rehabilitation",
    gdp: "Gender Diversity Psychology",
    iobp: "Industrial/Organizational Behavioural Psychology",
    cmp: "Consumer/Marketing Psychology",
    pdpd: "Psychology of Disorders and Preliminary Diagnosis",
  };
  const length = articleList.length;
  const articles2 = [];
  for (var i = 0; i < length; i++) {
    if (articleList[i].categoryKey == domain) {
      // setDomainName(articleList[i].categoryName)
      var d = articleList[i].categoryName;
      articles2.push(articleList[i]);
    }
  }

  function removeTags(str) {
    str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  for (var i = 0; i < articles2.length; i++) {
    articles2[i].desc_short = removeTags(articles2[i].desc);
    articles2[i].desc_short = articles2[i].desc_short.slice(0, 100) + "...";
  }

  const [url, setUrl] = useState("");
  useEffect(() => {
    var content = document.querySelector(".main-c");
    // content.innerHTML=details[domain].content;
    content.innerHTML = details[domain].content;
    setUrl(details[domain].video);
  }, []);
  return (
    <div id="articles-h">
      {articles2 ? (
        <div className="articles-main">
          <div className="main-content-container">
            <div className="main-title title-a">
              <h2>{map[domain]}</h2>
            </div>
            <div className="main-c"></div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="article-h2">
              <h3>Articles on {map[domain]}</h3>
            </div>
            <div className="article-card-container" id="">
              {articles2.map((article) => (
                <ArticleCard
                  imgSrc={article.imgSrc}
                  title={article.title}
                  author={article.author}
                  duration={article.duration}
                  date={article.date}
                  desc={removeTags(article.desc_short)}
                  categoryName={article.categoryName}
                  id={article._id}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
