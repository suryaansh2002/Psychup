import React from "react";

export default function Question(props) {
  function setColor(id, e) {
    var elms = document.querySelectorAll(`[id='${id}']`);

    for (var i = 0; i < elms.length; i++)
      elms[i].style.backgroundColor = "rgba(0, 255, 255, 0.452)"; // <-- whatever you need to do here.
    e.target.style.backgroundColor = "green";
  }

  return (
    <div>
      <div>
        <div className="question-title">
          {props.i}. {props.question}
        </div>
        <div>
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`dis-${props.i}`);
            }}
          >
            Disagree
          </button>
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`sl-dis-${props.i}`);
            }}
          >
            Slightly Disagree
          </button>{" "}
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`neu-${props.i}`);
            }}
          >
            Neutral
          </button>{" "}
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`sl-ag-${props.i}`);
            }}
          >
            Slightly Agree
          </button>
          <button
            type="button"
            className="ans-btn"
            id={`q${props.i}`}
            onClick={(e) => {
              setColor(`q${props.i}`, e);
              props.function(`ag-${props.i}`);
            }}
          >
            {" "}
            Agree
          </button>
        </div>
      </div>
    </div>
  );
}
