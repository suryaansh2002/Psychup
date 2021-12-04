import { React, useState, useEffect, Fragment } from "react";
import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./Editor.css";
import marked from "marked";
import { useCookies } from "react-cookie";
import { BiImage, BiCategory } from "react-icons/bi";
import { AiFillDownCircle } from "react-icons/ai";

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
  const [hash, setHash] = useState("");
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [editorCookie, setEditorCookie, removeEditorCookie] = useCookies([
    "editor-data",
  ]);
  const [hashCookie, setHashCookie, removeHashCookie] = useCookies(["hash"]);

  const [category, setCategory] = useState("");
  const [visibility, setVisibility] = useState(false);

  const [hashContainer, setHashContainer] = useState([]);

  const username = props.cookie.user.name;

  useEffect(() => {
    setEditorCookie("editor-data", value);
  }, [value]);

  useEffect(() => {
    setValue(editorCookie["editor-data"]);
    removeHashCookie(["hash"]);
    const l = 526;
  }, []);

  let md = `${value}`;
  let desc = marked(md);

  const headers = {
    "Content-Type": "application/json",
  };

  const getDisplay = async () => {
    const map = {
      Gender: "Gender Psychology",
      Behaviour: "Behaviour Psycholoy",
      Mental: "Mental Health",
    };
    const hashvalue = [];
    console.log(hashvalue);
    const date = new Date();
    const dateString = date.toDateString().slice(4);
    console.log(dateString);
    const duration = Math.round(desc.split(" ").length / 180);
    console.log(duration);

    const data = {
      imgSrc,
      title,
      desc,
      author: username,
      categoryKey: category,
      categoryName: map[category],
      hashContainer: hashContainer,
      duration,
      date: dateString,
    };

    console.log(data);

    await axios
      .post("http://localhost:5000/api/posts", data, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    removeEditorCookie("editor-data");
    window.location.reload();
  };

  async function addHash() {
    if (hash) {
      await hashContainer.push(hash);
      await setHashCookie("hash", hashContainer);
      console.log(hashCookie["hash"]);
    }
  }
  function upload() {
    const inp = document.getElementById("file-inp");
    inp.click();
  }
  return (
    <div className="editor-outer-container">
      <div className="editor-container">
        <div className="editor-h">
          <div className="row top-row">
            <button className="up-btn" onClick={() => upload()}>
              <BiImage className="icon" /> Upload cover image
            </button>
            <input type="file" id="file-inp" />
            <select
              className="category-select"
              name="hash"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={""}> Choose A Category</option>
              <option value={"Gender"}>Gender Psychology</option>
              <option value={"Behaviour"}>Behaviour Psycholody</option>
              <option value={"Mental"}>Mental Health</option>
              <option value={4}>Domain 4</option>
              <option value={5}>Domain 5</option>
            </select>
            <form className="myform">
              <input
                className="hash-text"
                type="text"
                placeholder="Add a hashtag"
                onChange={(e) => setHash(e.target.value)}
                required
              ></input>
              <button
                type="submit"
                className="  submit-hash"
                onClick={(e) => {
                  e.preventDefault();
                  addHash();
                }}
                disabled={hashContainer.length > 4}
              >
                Add Hashtag
              </button>
            </form>
            <button
              className="inst-btn"
              data-toggle="modal"
              data-target="#instructionsmodal"
              // className={visibility ? "inst-btn set-z" : "inst-btn"}
              // onClick={() => setVisibility(!visibility)}
            >
              Instructions
              {/* <AiFillDownCircle className="right-icon" /> */}
            </button>
          </div>
        </div>

        <div className="row hashes">
          {hashCookie["hash"] && (
            <div className="">
              <h5 className="hash-title">Hashtags:</h5>
              {hashCookie["hash"] &&
                hashCookie["hash"].map((hash) => (
                  <div className="div-hash">{hash}</div>
                ))}
            </div>
          )}
        </div>
        {visibility && <div className="editor-box"> </div>}

        <textarea
          className="editor-title"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <div className="col-lg-12">
          <div className="main-editor">
            <ReactMde
              value={value}
              onChange={setValue}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={(markdown) =>
                Promise.resolve(converter.makeHtml(markdown))
              }
              id="editor"
              loadSuggestions={loadSuggestions}
              childProps={{
                writeButton: {
                  tabIndex: -1,
                },
              }}
            />
          </div>
          <div className="button-container">
            <button
              className="article-submit"
              type="button"
              onClick={getDisplay}
            >
              Submit Article
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="instructionsmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Instructions
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              You can use the editor to add a new article, using markdown
              syntaxt, such as # for h1, ## for h2, etc. If you are not familiar
              with markdown syntaxt you can checkout{" "}
              <a
                target="_blank"
                href="https://www.markdownguide.org/basic-syntax/"
              >
                Markdown Syntaxt
              </a>{" "}
              to better help write your article. If you have already written
              your Article in .doc or .docx file you can use{" "}
              <a target="_blank" href="https://word2md.com/">
                Word to Markdown Converter
              </a>{" "}
              to convert your article in markdown format and then paste the
              contents below. Please upload a cover image for your article. You
              can also include hashtags along with your article for users to
              better understand the topics your article pertains too. You can
              include upto a maximum of 5 hashtags to each article. For any
              queries or issues regarding the same to reach out to us at{" "}
              <a href="mailto: psychupcontact13@gmail.com" target="_blank">
                contact@psychup.com{" "}
              </a>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
