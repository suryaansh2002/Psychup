import React from "react";

export default function Question(props) {
  function setColor(id, e) {
    var elms = document.querySelectorAll(`[id='${id}']`);

    for (var i = 0; i < elms.length; i++)
      elms[i].style.transform = "scale(1.0)"; // <-- whatever you need to do here.
    e.target.style.transform = "scale(1.5)";
  }

  return (
    <div>
      <div className="question-c">
        <div className="question-title">{props.question}</div>
        <div>
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`Disagree`);
            }}
          >
            😡
          </button>
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`Slightly Disagree`);
            }}
          >
            😠
          </button>{" "}
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`Neutral`);
            }}
          >
            😐
          </button>{" "}
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`Slightly Agree`);
            }}
          >
            😊
          </button>
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`Agree`);
            }}
          >
            {" "}
            😁
          </button>
        </div>
      </div>
    </div>
  );
}
