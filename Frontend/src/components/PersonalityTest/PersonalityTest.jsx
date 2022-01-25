import "./PersonalityTest.css";
import axios from "axios";
import { useState } from "react";

function PersonalityTest() {
  //make 30 variables
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");

  const [label, setLabel] = useState("");

  const [arr, setArr] = useState([]);

  const data = {
    facts: [
      {
        item: "i do just enough work to get by",
        response: `${a1}`,
      },
      {
        item: "i am always on the go",
        response: `${a2}`,
      },
      {
        item: "i dislike changes",
        response: `${a3}`,
      },
      {
        item: "i contradict others",
        response: `${a4}`,
      },
      {
        item: "I seldom get mad",
        response: `${a5}`,
      },
      {
        item: "I panic easily",
        response: `${a6}`,
      },
      {
        item: "I do not enjoy going to art museums",
        response: `${a7}`,
      },

      {
        item: "I keep in the background",
        response: "slightly agree",
      },
      {
        item: " I rush into things",
        response: "slightly disagree",
      },
      {
        item: "I laugh my way through life",
        response: "slightly disagree",
      },
      {
        item: " I have a sharp tongue",
        response: "agree",
      },
      {
        item: "I break rules",
        response: "disagree",
      },
      {
        item: "I seldom get emotional",
        response: "disagree",
      },
      {
        item: "I act wild and crazy",
        response: "disagree",
      },
      {
        item: "I avoid contacts with others",
        response: "slightly disagree",
      },
      {
        item: " I love large parties",
        response: "disagree",
      },
      {
        item: "I enjoy wild flights of fantasy",
        response: "disagree",
      },
      {
        item: "I easily resist temptations",
        response: "disagree",
      },
      {
        item: "I love to read challenging material",
        response: "agree",
      },
      {
        item: "I believe that we coddle criminals too much",
        response: "neutral",
      },
      {
        item: "I have a high opinion of myself",
        response: "agree",
      },
      {
        item: " I use flattery to get ahead",
        response: "disagree",
      },
      {
        item: " I leave a mess in my room",
        response: "disagree",
      },
      {
        item: "I am comfortable in unfamiliar situations",
        response: "disagree",
      },
      {
        item: "I start tasks right away",
        response: "disagree",
      },
      {
        item: "I misjudge situations",
        response: "slightly agree",
      },
      {
        item: "I can not stand weak people",
        response: "disagree",
      },
      {
        item: "I distrust people.",
        response: "disagree",
      },
      {
        item: "I feel that I am unable to deal with things",
        response: "disagree",
      },

      //add the variables here
      
      
    ],
    profile: { inventories: ["big5"], indices: ["withdrawal"] },
  };
  //data.facts[i].item not getting referenced

  var temp = [];
  for (var i = 1; i <= 30; i++) {
    temp.push(
      <div>
        <div className="question-title">
          {data.facts[i].item} 
        </div>
        <div>
          <button
            type="button"
            className="ans-btn"
            id={`q${i}`}
            onClick={(e) => {
              setColor(`q${i}`, e);
              setA4(`dis-${i}`);
            }}
          >
            Disagree
          </button>
          <button
            type="button"
            className="ans-btn"
            id={`q${i}`}
            onClick={(e) => {
              setColor(`q${i}`, e);
              setA4(`sl-dis-${i}`);
            }}
          >
            Slightly Disagree
          </button>{" "}
          <button
            type="button"
            className="ans-btn"
            id={`q${i}`}
            onClick={(e) => {
              setColor(`q${i}`, e);
              setA4(`neu-${i}`);
            }}
          >
            Neutral
          </button>{" "}
          <button
            type="button"
            className="ans-btn"
            id={`q${i}`}
            onClick={(e) => {
              setColor(`q${i}`, e);
              setA4(`sl-ag-${i}`);
            }}
          >
            Slightly Agree
          </button>
          <button
            type="button"
            className="ans-btn"
            id={`q${i}`}
            onClick={(e) => {
              setColor(`q${i}`, e);
              setA4(`ag-${i}`);
            }}
          >
            Agree
          </button>
        </div>
      </div>
    );
  }

  function max(temp) {
    return Math.max.apply(null, temp);
  }

  function giveLabel(arr) {
    if (max(arr) == arr[0]) {
      return "Logistician";
    } else if (max(arr) == arr[1]) {
      return "Logistician";
    } else if (max(arr) == arr[2]) {
      return "Entertertainer";
    } else if (max(arr) == arr[3]) {
      return "Protagonist";
    } else if (max(arr) == arr[4]) {
      return "Campaigner";
    } else {
      return "ggg";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/sentino", data)
      .then((res) => {
        setArr(JSON.stringify(res.data.profile.inventories.big5));

        var temp = res.data.profile.inventories.big5;

        var c = temp.conscientiousness.quantile;
        var n = temp.neuroticism.quantile;
        var e = temp.extraversion.quantile;
        var o = temp.openness.quantile;
        var a = temp.agreeableness.quantile;

        const arr = [c, n, e, o, a];

        console.log(giveLabel(arr));
      })

      .catch((err) => {
        console.log(err);
      });
  };

  function setColor(id, e) {
    var elms = document.querySelectorAll(`[id='${id}']`);

    for (var i = 0; i < elms.length; i++)
      elms[i].style.backgroundColor = "rgba(0, 255, 255, 0.452)"; // <-- whatever you need to do here.
    e.target.style.backgroundColor = "green";
  }

  return (
    <div className="personality-main">
      <h1>Personality Test</h1>
      <form method="post" name="myForm" autocomplete="on">
        {temp}
      </form>
      <button onClick={handleSubmit}>Submit</button>

      <div className="profile">{arr}</div>
      <div className="profile">{label}</div>
    </div>
  );
}

export default PersonalityTest;

