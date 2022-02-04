import { React, useState, useEffect, useRef } from "react";
import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./Editor.css";
import marked from "marked";

import axios from "axios";
import Input from "./Input";

function loadSuggestions(text) {
  return new Promise((accept, reject) => {
    setTimeout(() => {
      const suggestions = [
        {
          preview: "Andre",
          value: "@andre",
        },
        {
          preview: "Angela",
          value: "@angela",
        },
        {
          preview: "David",
          value: "@david",
        },
        {
          preview: "Louise",
          value: "@louise",
        },
      ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
      accept(suggestions);
    }, 250);
  });
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function Editor(props) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem("value")));
  const [selectedTab, setSelectedTab] = useState("write");
  const [hash, setHash] = useState(0);
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [date, setDate] = useState("");

  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState(0);

  const username = props.cookie.user.name;
  const ref1 = useRef("");
  const ref2 = useRef("");
  const ref3 = useRef("");
  const ref4 = useRef("");
  const ref5 = useRef("");
  const refs = [ref1, ref2, ref3, ref4, ref5];

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  });

  let md = `${value}`;
  let desc = marked(md);

  const headers = {
    "Content-Type": "application/json",
  };

  const getDisplay = () => {
    const map = {
      Gender: "Gender Psychology",
      Behaviour: "Behaviour Psycholoy",
      Mental: "Mental Health",
    };
    const hashvalue = [];
    for (i = 0; i < hash; i++) {
      hashvalue.push(refs[i].current.value);
    }
    console.log(hashvalue);
    const data = {
      imgSrc,
      title,
      desc,
      author: username,
      categoryKey: category,
      categoryName: map[category],
      hashContainer: hashvalue,
      duration,
      date,
    };

    console.log(desc);
    console.log(username);

    axios
      .post("https://psychup-back.herokuapp.com/api/posts", data, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.clear();
    window.location.reload();
  };

  const hashcontainer = [];
  for (var i = 0; i < hash; i++) {
    hashcontainer.push(<Input num={i + 1} refrence={refs[i]} />);
  }

  return (
    <div className="container">
      <div className="editor-header">
        <div className="div">Add cover photo</div>
        <div className="div">Add shtags</div>
      </div>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
      />
      <div className="editor-line">
        You can use the editor to add a new article, using markdown syntaxt,
        such as # for h1, ## for h2, etc. If you are not familiar with markdown
        syntaxt you can checkout{" "}
        <a target="_blank" href="https://www.markdownguide.org/basic-syntax/">
          Markdown Syntaxt
        </a>{" "}
        to better help write your article. If you have already written your
        Article in .doc or .docx file you can use{" "}
        <a target="_blank" href="https://word2md.com/">
          Word to Markdown Converter
        </a>{" "}
        to convert your article in markdown format and then paste the contents
        below. Please upload a cover image for your article. You can also
        include hashtags along with your article for users to better understand
        the topics your article pertains too. You can include upto a maximum of
        5 hashtags to each article. For any queries or issues regarding the same
        to reach out to us at{" "}
        <a href="mailto: psychupcontact13@gmail.com" target="_blank">
          contact@psychup.com{" "}
        </a>
      </div>

      <div className="input-container">
        <div className="row">
          <div className="col-lg-6">
            <label className="editor-label">ARTICLE TITLE:</label>
            <div>
              <input
                type="text"
                placeholder="Enter Article Title"
                onChange={(e) => setTitle(e.target.value)}
                className="editor-input"
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <label className="editor-label">UPLOAD COVER IMAGE:</label>
            <div>
              <input
                className="editor-input"
                type="text"
                placeholder="Enter image url"
                onChange={(e) => setImgSrc(e.target.value)}
              ></input>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <label className="editor-label">ENTER TODAY'S DATE:</label>
            <div>
              <input
                className="editor-input"
                type="text"
                placeholder="Enter today's date"
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="col-lg-6">
            <label className="editor-label">
              HOW MANY HASHTAGS WOULD YOU LIKE TO ADD?
            </label>
            <div>
              <select
                className="editor-select"
                name="hash"
                onChange={(e) => setHash(e.target.value)}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              {hashcontainer}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label className="editor-label">
              CHOOSE A CATEGORY FOR YOUR ARTICLE:
            </label>
            <div>
              <select
                className="editor-select"
                name="hash"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={""}>Choose A Category</option>
                <option value={"Gender"}>Gender Psychology</option>
                <option value={"Behaviour"}>Behaviour Psycholody</option>
                <option value={"Mental"}>Mental Health</option>
                <option value={4}>Domain 4</option>
                <option value={5}>Domain 5</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <label className="editor-label">ARTICLE DURATION:</label>
            <div>
              <input
                type="number"
                placeholder="Enter Article Duration"
                onChange={(e) => setDuration(e.target.value)}
                className="editor-input"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className="article-submit" type="button" onClick={getDisplay}>
          Submit Article
        </button>
      </div>
    </div>
  );
}
