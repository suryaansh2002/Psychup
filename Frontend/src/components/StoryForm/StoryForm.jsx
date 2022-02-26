import React, { useState } from "react";
import "./StoryForm.css";
import axios from "axios";

export default function StoryForm(props) {
  const [n, setN] = useState("");
  const [title, setTitle] = useState("");
  const [imgFile, setImgFile] = useState("");

  const [msg, setMsg] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  function onFileChange(e) {
    setImgFile(e.target.files[0]);
  }

  function addImg() {
    document.getElementById("imgFile").click();
  }

  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };

  const handleSubmit = async (e) => {
    if (title === "" || n === "" || msg === "") {
      alert("Please fill all the fields before submitting!");
      return;
    }
    const formData = new FormData();
    formData.append("imgFile", imgFile);
    console.log(formData);
    await axios
      .post("http://localhost:5000/story/img-upload", formData)
      .then(async (res) => {
        console.log(res);
        console.log(res.data._id);

        const name = anonymous ? "Anonymous" : n;
        const content = msg.replaceAll("\n", "<br/>");
        const imgDetailObj = {
          imgId: res.data._id,
          name: name,
          title: title,
          content: content,
        };
        console.log("Uploaded image!");

        await axios
          .put("http://localhost:5000/story/", imgDetailObj)
          .then((res) => {
            console.log(res);
            console.log("Uploaded details!");
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

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
            id="imgFile"
            style={{ display: "none" }}
            onChange={onFileChange}
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
