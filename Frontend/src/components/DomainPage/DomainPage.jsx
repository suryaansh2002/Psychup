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
    ppid: "Psychology of Personality and Individual Difference",
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
  return (
    <div id="articles-h">
      {articles2 ? (
        <div className="articles-main">
          <div className="main-content-container">
            <div className="main-title title-a">
              <h2>{map[domain]}</h2>
            </div>
            <div className="main-c">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis ipsum nisl. In imperdiet nunc pulvinar pulvinar ultricies.
              Etiam mattis ex mi, vel egestas risus pellentesque nec. Aliquam eu
              nulla pharetra, facilisis nisi vestibulum, semper elit. Sed
              fringilla maximus turpis, quis scelerisque nunc auctor in. Donec
              laoreet faucibus odio, eget luctus urna mattis at. Ut euismod mi a
              velit mollis, eget pharetra diam mattis. Donec ac euismod sapien.
              Duis condimentum risus sapien, a sagittis mauris condimentum
              pretium. Nunc in augue non lorem tempor vulputate in quis elit.
              Fusce blandit purus erat, ut commodo nisi facilisis sed.
              Vestibulum non urna mauris. Praesent luctus, quam eu euismod
              dapibus, sapien turpis pellentesque justo, vitae dapibus lorem
              massa id ligula. Vivamus tincidunt lacus nisi, eget accumsan odio
              tempus et. Sed pretium ante nec nisi sollicitudin, eu consectetur
              nisi varius. Suspendisse ac elementum purus, in pulvinar elit.
              Aenean rhoncus convallis ligula at tristique. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec eget consequat risus. Vestibulum id tincidunt nisl, id
              bibendum enim. Maecenas ut arcu dictum, tincidunt turpis eget,
              eleifend lorem. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Proin quis urna risus.
              Suspendisse lobortis ex vel commodo aliquet. Duis aliquet nisl non
              purus finibus, at lobortis enim tempor. Praesent augue urna,
              iaculis vitae interdum in, sagittis a enim.
            </div>
            <div className="video">
              {/* <video className="explore-video" controls>
                <source src={video1} type="video/mp4"></source>
              </video> */}
            </div>
            <div className="article-h2">
              <h3>Articles on {map[domain]}</h3>
            </div>
            <div className="article-card-container" id="all">
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
