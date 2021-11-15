import React from "react";

export default function Input(props) {
  return (
    <div className="hashcontainer">
      Enter Hashtag Number {props.num}:{" "}
      <div>
      <input type="text" className="hash-input" ref={props.refrence}></input>
      </div>
    </div>
  );
}
