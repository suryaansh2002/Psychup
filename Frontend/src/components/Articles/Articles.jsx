import "./Articles.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import Slider from "react-slick";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);

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

  const length = articleList.length;

  const articles2 = articleList.slice(length - 4, length);

  function removeTags(str) {
    str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  for (var i = 0; i < articles2.length; i++) {
    articles2[i].desc_short=removeTags(articles2[i].desc)
    articles2[i].desc_short = articles2[i].desc_short.slice(0, 100) + "...";
  }
  console.log(articleList);
  const [carSettings,setCarSettings]=useState()
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 2,
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
    slidesToScroll: 2,
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
    slidesToScroll: 2,
    dragable: true,
    centerPadding: "20px",
    pauseOnHover: false,
    centerMode: true,

  };
  useEffect(()=>{

    window.innerWidth>1000?setCarSettings(settings):window.innerWidth>800?setCarSettings(settings3): setCarSettings(settings2)

  },[window.innerWidth])

  return (
    <div id="articles-h">
      {articles2 ? (
        <div className="articles-main">
          <div className="main-content-container">
            <div className="main-title">
              <h2>Featured Articles</h2>
            </div>
            <div className="article-card-container">
              <Slider className="slider" {...carSettings}>
                {articles2.map((article) => (
                  <div>
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
                  </div>
                ))}
              </Slider>
            </div>

            <Link to={"/articles"}>
              <button className="checkout-all">
                Checkout All Our Articles
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
