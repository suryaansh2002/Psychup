import React, { useState } from "react";
import "./StoryForm.css";
import axios from "axios";

export default function StoryForm(props) {
  const [n, setN] = useState("");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [msg, setMsg] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  function addImg() {
    document.getElementById("img-file").click();
  }

  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };
  function handleSubmit() {
    const name = anonymous ? "Anonymous" : n;
    const content = msg.replaceAll("\n", "<br/>");
    const data = {
      name,
      title,
      imgUrl,
      content,
    };

    axios
      .post("http://localhost:5000/story", data)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  }
  return (
    <div className="sf-c">
      <div className="sf-h">Share Your Story</div>
      <div className="sf-box">
        {!anonymous && (
          <input
            type={"text"}
            className="sf-input"
            onChange={(e) => setN(e.target.value)}
            placeholder="Enter Your Name"
          ></input>
        )}{" "}
        <div className="sf-an">
          <input
            type={"checkbox"}
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
          ></input>
          Share Anonymously
        </div>
        <input
          type={"text"}
          className="sf-input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        ></input>
        <div>
          <button className="sf-btn" onClick={() => addImg()}>
            Add an image
          </button>
          <input
            type={"file"}
            id="img-file"
            style={{ display: "none" }}
          ></input>
          <p className="sf-p">
            (Optional)
            <br />
            It can be your image or an image relating to your story
          </p>
        </div>
        <textarea
          className="sf-ta"
          rows={"7"}
          onChange={(e) => setMsg(e.target.value)}
          placeholder={"Write your story!"}
        ></textarea>
        <button className="sf-submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
}
