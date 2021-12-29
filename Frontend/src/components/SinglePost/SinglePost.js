import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
// import "./SinglePost.css";
import "./new.css";
import { ImShare2 } from "react-icons/im";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillClockCircle, AiFillTrophy } from "react-icons/ai";
import { GoSmiley } from "react-icons/go";
import { HiThumbUp } from "react-icons/hi";
import { articles } from "../Articles/ArticleList";
import ArticleCard from "../Articles/ArticleCard";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import leftImg from "../../images/img20.png";
import rightImg from "../../images/img19.png";

export default function SinglePost(props) {
  function removeTags(str) {
    str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  // const userName = props.cookie.user.name;
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState("");

  const splitArr = window.location.pathname.split("/");
  const id = splitArr[2];
  console.log(id);

  const getInitials = (name) => {
    let initials = name.split(" ");

    if (initials.length > 1) {
      return initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      return name.substring(0, 2);
    }
  };

  const [articleList, setArticleList] = useState([]);
  const [articleList2, setArticleList2] = useState([]);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/" + id)
      .then((response) => {
        setArticleList([response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(articleList);
  console.log(typeof { setCheck });
  const article = articleList[0];

  console.log(article);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/")
      .then((response) => {
        setArticleList2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const length = articleList2.length;
  console.log(articleList2);
  const articles2 = articleList2.slice(length - 3, length);

  for (var i = 0; i < articles2.length; i++) {
    articles2[i].desc_short = articles2[i].desc.slice(0, 300) + "...";
    articles2[i].desc_short = removeTags(articles2[i].desc_short);
  }

  console.log(articles2);

  return (
    <>
      <div className="s-a-main">
        {article ? (
          <div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <img src={article.imgSrc} className="s-a-img"></img>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="s-a-title">{article.title}</div>
                  <div className="s-a-author">-by {article.author}</div>
                  <div className="s-a-domain">
                    Domain: {article.categoryName}
                  </div>
                  <div className="hash-c">
                    {article.hashContainer.map((tag) => (
                      <div className="hash-box">#{tag}</div>
                    ))}
                  </div>
                  <div className="row a-row">
                    <div className="col-lg-6 date">
                      Published on: {article.date}
                    </div>
                    <div className="col-lg-6 duration">
                      <AiFillClockCircle className="d-clock" />
                      {article.duration} min read.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="a-content"
                  dangerouslySetInnerHTML={{ __html: article.desc }}
                ></div>
              </div>
            </div>

            <div className="row comment-c">

              {props.cookie.user ? (
                <Comments user={props.cookie.user} post={article} />
              ) : (
                <Comments post={article} />
              )}
            </div>
            <div className="row">
              <Link to={"/articles"}>
                <button className="all-b">Checkout All Our Articles</button>
              </Link>
            </div>

            {/* <div className="outer-article-container">
              <div className="single-article-container">
                <div className="img-container">
                  <div className="img-article">
                    <img src={article.imgSrc}></img>
                  </div>
                </div>
                <div className="article-title-container">
                  <div className="article-title">{article.title}</div>
                </div>
                <div className="article-domain">
                  Domain: {article.categoryName}
                </div>
                <div className="hash-container">
                  {article.hashContainer.map((tag) => (
                    <div className="tag-box">#{tag}</div>
                  ))}
                </div>

                <div className="author">
                  {/* <button className="initials-button-2 author-image">
                    {getInitials(article.author)}
                  </button> 
                  {
                    <div className="author-details">
                      <div className="author-container-name">
                        {article.author}
                      </div>
                      <div className="author-container-date">
                        Published on {article.date}
                      </div>
                      <div className="author-container-read">
                        <span className="clock">
                          <AiFillClockCircle />
                        </span>
                        {article.duration} min read
                      </div>
                    </div>
                  }
                </div>
                <div className="article-content-container">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.desc }}
                    className="article-content"
                  />
                </div>
              </div>
              
              <div className="icons">
                <button className="social-button">
                  <a target="_blank" href="#">
                    <GoSmiley className="like-icons" />
                  </a>
                </button>
                <button className="social-button">
                  <a target="_blank" href="#">
                    <AiFillTrophy className="like-icons" />
                  </a>
                </button>
                <button className="social-button">
                  <a target="_blank" href="#">
                    <HiThumbUp className="like-icons" />
                  </a>
                </button>
              </div> 
            </div>

            {props.cookie.user ? (
              <Comments user={props.cookie.user} post={article} />
            ) : 
            <Comments  post={article} />
            }
          
            <div className="article-card-container">
              <div className="main-title all-heading">
                <h2>Checkout Our Other Articles</h2>
              </div>
              {articles2.map((article) => (
                <ArticleCard
                  imgSrc={article.imgSrc}
                  title={article.title}
                  author={article.author}
                  duration={article.duration}
                  date={article.date}
                  desc={article.desc_short}
                  categoryName={article.categoryName}
                  id={article._id}
                />
              ))}
            </div> */}
          </div>
        ) : null}
      </div>
    </>
  );
}
