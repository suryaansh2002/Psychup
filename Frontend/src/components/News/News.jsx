import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

export default function News() {
  const [articles, setArticles] = useState([]);
  const query = "psychology";

//   const splitArr = window.location.pathname.split("/");
//   const domain = splitArr[2];
//   console.log(domain);
// var count=0;
//   useEffect(() => {
      
//     axios
//       .get(
//         "http://newsapi.org/v2/everything?q=psychology&apiKey=a6b2736115464642a67216804d7aeb1b"
//       )
//       .then((response) => {
//         setArticles(response.data.articles);
//         console.log(articles);
//         if(articles.length==0){
//             console.log(count)
//             console.log(articles.length)
//             count+=1
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   }, [count]);

useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://newsapi.org/v2/everything?q='+query+'&from=2021-11-20&to=2021-11-28&apiKey=a6b2736115464642a67216804d7aeb1b')
        .then((response) =>(console.log(response.data.articles), setArticles(response.data.articles),console.log(articles)));
}, []);

  return (
    <div className="container4">
      <div className="news-h">News Related to {query}</div>
      {articles[0] ? (<div className="card-container">
            {
                articles.map((article)=>

                <div className="card">
                <a href={article.url} target="_blank">
                    <div className="card-title">{article.title}</div>
                    <div><img className="card-img" src={article.urlToImage}></img></div>
                    <div>{article.content.slice(0,article.content.indexOf('['))}</div>




                    </a>
                </div>)
            }

      </div> ): null}
    </div>
  );
}
