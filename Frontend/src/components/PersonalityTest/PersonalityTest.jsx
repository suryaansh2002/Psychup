import "./PersonalityTest.css";
import axios from "axios";
import { useState } from "react";

function PersonalityTest() {
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");

  const [arr, setArr] = useState([]);

  const data = {
    facts: [
      {
        item: "I do just enough work to get by",
        response: `${a1}`,
      },
      {
        item: "I am always on the go",
        response: `${a2}`,
      },
      {
        item: "I dislike changes",
        response: `${a3}`,
      },
    ],
    profile: { inventories: ["big5"], indices: ["withdrawal"] },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/sentino", data)
      .then((res) => {
        //Here you are getting an array of all the 5 traits, based on the responses submitted
        //So, if the "quantile" factor of any trait is from 0 to 0.33, display the text as "low",
        //from 0.33 to 0.67 -> "medium" and from 0.67 to 1 -> "high"
        //Array mil rhi hai, bas cards ki form mein display karna hai, you can make a new route called "Profile.js"
        //where the results would be displayed, itni functinality abhi bani hai, rest I am doing, cheers.

        setArr(JSON.stringify(res.data.profile.inventories));
        console.log(arr);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  function setColor(id,e){
    var elms = document.querySelectorAll(`[id='${id}']`);

    for(var i = 0; i < elms.length; i++) 
      elms[i].style.backgroundColor='rgba(0, 255, 255, 0.452)'; // <-- whatever you need to do here.
   e.target.style.backgroundColor="green" 
  }

  return (
    <div className="personality-main">
    <h1>Personality Test</h1>
      <form method="post" name="myForm" autocomplete="on">
        <div>Question 1 blah blah blah blah blah</div>
        <fieldset
          className="schedule-weekday"
          value={a1}
          onChange={(event) => setA1(event.target.value)}
        >
          <label for="dis-1">
            <input type="radio" name="q1" value="dis-1" id="dis-1" />
            Disagree
          </label>
          <label for="sl-dis-1">
            <input type="radio" name="q1" value="sl-dis-1" id="sl-dis-1" />
            Slighly Disagree
          </label>
          <label for="neu-1">
            <input type="radio" name="q1" value="neu-1" id="neu-1" />
            Neutral
          </label>
          <label for="sl-ag-1">
            <input type="radio" name="q1" value="sl-ag-1" id="sl-ag-1" />
            Slighly Agree
          </label>
          <label for="ag-1">
            <input type="radio" name="q1" value="ag-1" id="ag-1" />
            Agree
          </label>
        </fieldset>

        <fieldset
          className="schedule-weekday"
          value={a2}
          onChange={(event) => setA2(event.target.value)}
        >
          <label for="dis-2">
            <input type="radio" name="a2" value="dis-1" id="dis-1" />
            Disagree
          </label>
          <label for="sl-dis-2">
            <input type="radio" name="a2" value="sl-dis-2" id="sl-dis-2" />
            Slighly Disagree
          </label>
          <label for="neu-2">
            <input type="radio" name="a2" value="neu-2" id="neu-2" />
            Neutral
          </label>
          <label for="sl-ag-2">
            <input type="radio" name="a2" value="sl-ag-2" id="sl-ag-2" />
            Slighly Agree
          </label>
          <label for="ag-2">
            <input type="radio" name="a2" value="ag-2" id="ag-2" />
            Agree
          </label>
        </fieldset>

        <fieldset
          className="schedule-weekday"
          value={a3}
          onChange={(event) => setA3(event.target.value)}
        >
          <label for="dis-3">
            <input type="radio" name="a3" value="dis-3" id="dis-3" />
            Disagree
          </label>
          <label for="sl-dis-3">
            <input type="radio" name="a3" value="sl-dis-3" id="sl-dis-3" />
            Slighly Disagree
          </label>
          <label for="neu-3">
            <input type="radio" name="a3" value="neu-3" id="neu-3" />
            Neutral
          </label>
          <label for="sl-ag-3">
            <input type="radio" name="a3" value="sl-ag-3" id="sl-ag-3" />
            Slighly Agree
          </label>
          <label for="ag-3">
            <input type="radio" name="a3" value="ag-3" id="ag-3" />
            Agree
          </label>
        </fieldset>

        <div className="question-title">
          Question 4: Blah blah blah blah blah blah blah blah blah blah blah
          blah blah
        </div>
        <div>
          <button type="button" className="ans-btn" id="q4" onClick={(e) =>{setColor("q4",e);setA4("dis-4")}}>
            Disagree
          </button>
          <button type="button" className="ans-btn" id="q4" onClick={(e) =>{setColor("q4",e);setA4("sl-dis-4")}}>
            Slightly Disagree
          </button>{" "}
          <button type="button" className="ans-btn" id="q4" onClick={(e) =>{setColor("q4",e);setA4("neu-4")}}>
            Neutral
          </button>{" "}
          <button type="button" className="ans-btn" id="q4" onClick={(e) =>{setColor("q4",e);setA4("sl-ag-4")}}>
            Slightly Agree
          </button>
          <button type="button" className="ans-btn" id="q4" onClick={(e) =>{setColor("q4",e);setA4("ag-4")}}>
            Agree
          </button>
        </div>
        {/* <button name="q4" onClick={setA4("dis-4")}>
Disagree
        </button>
       */}
      </form>
      <button onClick={handleSubmit}>Submit</button>

      <div className="profile">{arr}</div>
    </div>
  );
}

export default PersonalityTest;
