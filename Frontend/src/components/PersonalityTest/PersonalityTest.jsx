import "./PersonalityTest.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./Question";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import t1 from "../../images/logician.png";
import t2 from "../../images/logistician.png";
import t3 from "../../images/entertainer.png";
import t4 from "../../images/protagonist.png";
import t5 from "../../images/campaigner.png";

import html2pdf from "html2pdf.js";

function PersonalityTest(props) {
  //make 30 variables
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");
  const [a8, setA8] = useState("");
  const [a9, setA9] = useState("");
  const [a10, setA10] = useState("");
  const [a11, setA11] = useState("");
  const [a12, setA12] = useState("");
  const [a13, setA13] = useState("");
  const [a14, setA14] = useState("");
  const [a15, setA15] = useState("");
  const [a16, setA16] = useState("");
  const [a17, setA17] = useState("");
  const [a18, setA18] = useState("");
  const [a19, setA19] = useState("");
  const [a20, setA20] = useState("");
  const [a21, setA21] = useState("");
  const [a22, setA22] = useState("");
  const [a23, setA23] = useState("");
  const [a24, setA24] = useState("");
  const [a25, setA25] = useState("");
  const [a26, setA26] = useState("");
  const [a27, setA27] = useState("");
  const [a28, setA28] = useState("");
  const [a29, setA29] = useState("");
  const [a30, setA30] = useState("");

  const [arr, setArr] = useState([]);
  function max(temp) {
    return Math.max.apply(null, temp);
  }

  function handleDownload() {
    var opt = {
      margin: 2,
      filename: "personalityResult.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "A1", orientation: "p" },
    };

    var content = document.getElementById("down");
    console.log(content);
    html2pdf().from(content).set(opt).save();
  }

  function giveLabel(arr) {
    if (max(arr) == arr[0]) {
      return "Logician";
    } else if (max(arr) == arr[1]) {
      return "Logistician";
    } else if (max(arr) == arr[2]) {
      return "Entertainer";
    } else if (max(arr) == arr[3]) {
      return "Protagonist";
    } else if (max(arr) == arr[4]) {
      return "Campaigner";
    }
  }
  const data = {
    inventories: ["big5"],
    facts: [
      {
        text: "I do just enough work to get by",
        response: `${a1}`,
      },
      {
        text: "I am always on the go",
        response: `${a2}`,
      },
      {
        text: "I dislike changes",
        response: `${a3}`,
      },
      {
        text: "I contradict others",
        response: `${a4}`,
      },
      {
        text: "I seldom get mad",
        response: `${a5}`,
      },
      {
        text: "I panic easily",
        response: `${a6}`,
      },
      {
        text: "I do not enjoy going to art museums",
        response: `${a7}`,
      },

      {
        text: "I keep in the background",
        response: `${a8}`,
      },
      {
        text: " I rush into things",
        response: `${a9}`,
      },
      {
        text: "I laugh my way through life",
        response: `${a10}`,
      },
      {
        text: " I have a sharp tongue",
        response: `${a11}`,
      },
      {
        text: "I break rules",
        response: `${a12}`,
      },
      {
        text: "I seldom get emotional",
        response: `${a13}`,
      },
      {
        text: "I act wild and crazy",
        response: `${a14}`,
      },
      {
        text: "I avoid contacts with others",
        response: `${a15}`,
      },
      {
        text: " I love large parties",
        response: `${a16}`,
      },
      {
        text: "I enjoy wild flights of fantasy",
        response: `${a17}`,
      },
      {
        text: "I easily resist temptations",
        response: `${a18}`,
      },
      {
        text: "I love to read challenging material",
        response: `${a19}`,
      },
      {
        text: "I believe that we coddle criminals too much",
        response: `${a20}`,
      },
      {
        text: "I have a high opinion of myself",
        response: `${a21}`,
      },
      {
        text: " I use flattery to get ahead",
        response: `${a22}`,
      },
      {
        text: " I leave a mess in my room",
        response: `${a23}`,
      },
      {
        text: "I am comfortable in unfamiliar situations",
        response: `${a24}`,
      },
      {
        text: "I start tasks right away",
        response: `${a25}`,
      },
      {
        text: "I misjudge situations",
        response: `${a26}`,
      },
      {
        text: "I can not stand weak people",
        response: `${a27}`,
      },
      {
        text: "I distrust people.",
        response: `${a28}`,
      },
      {
        text: "I feel that I am unable to deal with things",
        response: `${a29}`,
      },

      //add the variables here
    ],
  };

  // Test Data Set
  const [c, setC] = useState(0.871);
  const [n, setN] = useState(0.521);
  const [e, setE] = useState(0.111);
  const [o, setO] = useState(0.505);
  const [a, setA] = useState(0.909);
  const [label, setLabel] = useState("Campaigner");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.facts);


    var url = "https://psychup-back.herokuapp.com";
    console.log("Sending request");

    axios
      .post(url + "/api/sentino", data)
      .then((res) => {
        console.log("response", res);
        setArr(JSON.stringify(res.data.big5));

        var temp = res.data.big5;

        setC(res.data.big5.conscientiousness.quantile);
        setN(res.data.big5.neuroticism.quantile);
        setE(res.data.big5.extraversion.quantile);
        setO(res.data.big5.openness.quantile);
        setA(res.data.big5.agreeableness.quantile);

        setCount(count + 1);
        const arr2 = [
          res.data.big5.conscientiousness.quantile,
          res.data.big5.neuroticism.quantile,
          res.data.big5.extraversion.quantile,
          res.data.big5.openness.quantile,
          res.data.big5.agreeableness.quantile,
        ];
        setLabel(giveLabel(arr2));
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const [count, setCount] = useState(0);

  function toggleKey(e) {
    e.target.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = document.querySelector(".panel");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }

  const [wait, setWait] = useState(false);
  function handleError(c) {
    if (c == 0) {
      if (!a1 || !a2 || !a3 || !a4 || !a5 || !a6) {
        return false;
      } else {
        return true;
      }
    }

    if (c == 1) {
      if (!a7 || !a8 || !a9 || !a10 || !a11 || !a12) {
        return false;
      } else {
        return true;
      }
    }
    if (c == 2) {
      if (!a13 || !a14 || !a15 || !a16 || !a17 || !a18) {
        return false;
      } else {
        return true;
      }
    }
    if (c == 3) {
      if (!a19 || !a20 || !a21 || !a22 || !a23 || !a24) {
        return false;
      } else {
        return true;
      }
    }
    if (c == 4) {
      if (!a25 || !a26 || !a27 || !a28 || !a29) {
        return false;
      } else {
        return true;
      }
    }
  }

  return (
    <div className="personality-main">
      {count < 5 && <h1>Personality Test</h1>}
      {count < 5 && <h2>Section: {count + 1} / 5</h2>}
      {count < 5 && (
        <div className="key-box">
          <div className="key-h">Key</div>
          <div className="key-div">😡-> Disagree</div>
          <div className="key-div">😠 -> Slightly Disagree</div>
          <div className="key-div">😐 -> Neutral</div>
          <div className="key-div">😊 -> Slightly Agree</div>
          <div className="key-div">😁 -> Agree</div>
        </div>
      )}

      {count < 5 && (
        <>
          <div className="key-res-2">
            <div className="key-inst">
              Use the given key to asses your personality
            </div>
            <button class="accordion" onClick={(e) => toggleKey(e)}>
              <div className="key-h">
                Key <AiOutlineDown className="down" />
              </div>
            </button>
            <div class="panel" id="pan">
              <div className="key-div">😡 -> Disagree</div>
              <div className="key-div">😠 -> Slightly Disagree</div>
              <div className="key-div">😐 -> Neutral</div>
              <div className="key-div">😊 -> Slightly Agree</div>
              <div className="key-div">😁 -> Agree</div>
            </div>
          </div>
          {count == 0 && (
            <>
              <Question i={1} question={data.facts[0].text} function={setA1} />
              <Question i={2} question={data.facts[1].text} function={setA2} />
              <Question i={3} question={data.facts[2].text} function={setA3} />
              <Question i={4} question={data.facts[3].text} function={setA4} />
              <Question i={5} question={data.facts[4].text} function={setA5} />
              <Question i={6} question={data.facts[5].text} function={setA6} />
            </>
          )}
          {count == 1 && (
            <>
              <Question i={7} question={data.facts[6].text} function={setA7} />
              <Question i={8} question={data.facts[7].text} function={setA8} />
              <Question i={9} question={data.facts[8].text} function={setA9} />
              <Question
                i={10}
                question={data.facts[9].text}
                function={setA10}
              />
              <Question
                i={11}
                question={data.facts[10].text}
                function={setA11}
              />
              <Question
                i={12}
                question={data.facts[11].text}
                function={setA12}
              />
            </>
          )}
          {count == 2 && (
            <>
              {" "}
              <Question
                i={13}
                question={data.facts[12].text}
                function={setA13}
              />
              <Question
                i={14}
                question={data.facts[13].text}
                function={setA14}
              />
              <Question
                i={15}
                question={data.facts[14].text}
                function={setA15}
              />
              <Question
                i={16}
                question={data.facts[15].text}
                function={setA16}
              />
              <Question
                i={17}
                question={data.facts[16].text}
                function={setA17}
              />
              <Question
                i={18}
                question={data.facts[17].text}
                function={setA18}
              />
            </>
          )}
          {count == 3 && (
            <>
              {" "}
              <Question
                i={19}
                question={data.facts[18].text}
                function={setA19}
              />
              <Question
                i={20}
                question={data.facts[19].text}
                function={setA20}
              />
              <Question
                i={21}
                question={data.facts[20].text}
                function={setA21}
              />
              <Question
                i={22}
                question={data.facts[21].text}
                function={setA22}
              />
              <Question
                i={23}
                question={data.facts[22].text}
                function={setA23}
              />
              <Question
                i={24}
                question={data.facts[23].text}
                function={setA24}
              />
            </>
          )}
          {count == 4 && (
            <>
              <Question
                i={25}
                question={data.facts[24].text}
                function={setA25}
              />
              <Question
                i={26}
                question={data.facts[25].text}
                function={setA26}
              />
              <Question
                i={27}
                question={data.facts[26].text}
                function={setA27}
              />
              <Question
                i={28}
                question={data.facts[27].text}
                function={setA28}
              />
              <Question
                i={29}
                question={data.facts[28].text}
                function={setA29}
              />
            </>
          )}
        </>
      )}
      {/* {count>0 && <button  onClick={()=>setCount(count-1)}>Previous</button>} */}
      {count < 4 && (
        <button
          className="pt-btn"
          onClick={async () => {
            if (await handleError(count)) {
              setCount(count + 1);
              window.scrollTo(0, 0);
            } else {
              alert("Fill in all the fields before proceeding!");
            }
          }}
        >
          Next <AiOutlineArrowRight className="right" />
        </button>
      )}

      {count == 4 && (
        <>
          <button
            className="pt-btn"
            onClick={(e) => {
              setWait(true);
              handleSubmit(e);
            }}
          >
            Submit
          </button>
          {wait && (
            <div className="wait">
              Please wait while we asses your response...
            </div>
          )}{" "}
        </>
      )}

      {props.cookie.user ? (
        <>
          {count == 5 && (
            <h1 id="results">
              Hi {props.cookie.user.name}, your Assesment Results are-
            </h1>
          )}
        </>
      ) : (
        <>{count == 5 && <h1 id="results">Your Assesment Results</h1>}</>
      )}
      <div id="down">
        {count == 5 && (
          <div>
            <h2 className="res-h1" id="res2">
              Characteristics:
            </h2>
            <div className="cardss">
              <div className="card-1 c1">
                <div className="c-1-h">Conscientiousness</div>
                <div className="bar-c">
                  <CircularProgressbar
                    value={(c * 100).toFixed(2)}
                    text={`${(c * 100).toFixed(2)}%`}
                    circleRatio={1}
                    strokeWidth={10}
                    strokeLinecap="round"
                    styles={buildStyles({
                      strokeLinecap: "round",
                      textSize: "14px",
                      strokeWidth: 100,
                      pathColor: `#745074`,
                      textColor: "black",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>

              <div className="card-1 c2">
                <div className="c-1-h">Neuroticism</div>
                <div className="bar-c">
                  <CircularProgressbar
                    value={(n * 100).toFixed(2)}
                    text={`${(n * 100).toFixed(2)}%`}
                    circleRatio={1}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "round",
                      textSize: "14px",
                      strokeWidth: 100,
                      pathColor: `#ad826c`,
                      textColor: "black",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>

              <div className="card-1 c3">
                <div className="c-1-h">Extraversion</div>
                <div className="bar-c">
                  <CircularProgressbar
                    value={(e * 100).toFixed(2)}
                    text={`${(e * 100).toFixed(2)}%`}
                    circleRatio={1}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "round",
                      textSize: "14px",
                      strokeWidth: 100,
                      pathColor: `#627962`,
                      textColor: "black",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>

              <div className="card-1 c4">
                <div className="c-1-h">Openness</div>
                <div className="bar-c">
                  <CircularProgressbar
                    value={(o * 100).toFixed(2)}
                    text={`${(o * 100).toFixed(2)}%`}
                    circleRatio={1}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "round",
                      textSize: "14px",
                      strokeWidth: 100,
                      pathColor: `#96965a`,
                      textColor: "black",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>

              <div className="card-1 c5">
                <div className="c-1-h">Agreeableness</div>
                <div className="bar-c">
                  <CircularProgressbar
                    value={(a * 100).toFixed(2)}
                    text={`${(a * 100).toFixed(2)}%`}
                    circleRatio={1}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "round",
                      textSize: "14px",
                      strokeWidth: 100,
                      pathColor: `#58868d`,
                      textColor: "black",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="long-card lc1 c1">
              <div className="lc-h">Conscientiousness</div>
              <div className="lc-c">
                Conscientiousness is the personality trait of being careful, or
                diligent. Conscientiousness implies a desire to do a task well,
                and to take obligations to others seriously. Conscientious
                people tend to be efficient and organized as opposed to
                easy-going and disorderly
              </div>
            </div>

            <div className="long-card lc2 c2">
              <div className="lc-h">Neuroticism</div>
              <div className="lc-c">
                Neuroticism is the trait disposition to experience negative
                affects, including anger, anxiety, self‐consciousness,
                irritability, emotional instability, and depression1. Persons
                with elevated levels of neuroticism respond poorly to
                environmental stress, interpret ordinary situations as
                threatening, and can experience minor frustrations as hopelessly
                overwhelming.
              </div>
            </div>

            <div className="long-card lc1 c3">
              <div className="lc-h">Extraversion</div>
              <div className="lc-c">
                Extraversion is a measure of how energetic, sociable and
                friendly a person is. Extraverts are commonly understood as
                being a 'people's person' drawing energy from being around
                others directing their energies towards people and the outside
                world.
              </div>
            </div>

            <div className="long-card lc2 c4">
              <div className="lc-h">Openness</div>
              <div className="lc-c">
                Openness to experience is one of the domains which are used to
                describe human personality in the Five Factor Model. Openness
                involves six facets, or dimensions: active imagination,
                aesthetic sensitivity, attentiveness to inner feelings,
                preference for variety, intellectual curiosity, and challenging
                authority
              </div>
            </div>

            <div className="long-card lc1 c5">
              <div className="lc-h">Agreeableness</div>
              <div className="lc-c">
                Agreeableness is one of the five personality traits of the Big
                Five personality theory. A person with a high level of
                agreeableness in a personality test is usually warm, friendly,
                and tactful. They generally have an optimistic view of human
                nature and get along well with others.
              </div>
            </div>

            <div className="label-c">
              <h4 className="res-h2">Your Personality Label Is:</h4>
              {/* <div className="label-c"> */}
              {label == "Logician" && (
                <>
                  <div>
                    <img className="label-img" src={t1} />
                  </div>
                  <div className="res-h3"> Logician- INTP</div>

                  <a href="/personalities/logician">
                    <button className="label-btn">
                      Read about your personality
                    </button>
                  </a>
                </>
              )}
              {label == "Logistician" && (
                <>
                  <div>
                    <img className="label-img" src={t2} />
                  </div>
                  <div className="res-h3"> Logistician- ISTJ</div>

                  <a href="/personalities/logistician">
                    <button className="label-btn">
                      Read about your personality
                    </button>
                  </a>
                </>
              )}
              {label == "Entertainer" && (
                <>
                  <div>
                    <img className="label-img" src={t3} />
                  </div>
                  <div className="res-h3"> Entertainer-ESFP</div>
                  <a href="/personalities/entertainer">
                    <button className="label-btn">
                      Read about your personality
                    </button>
                  </a>
                </>
              )}
              {label == "Protagonist" && (
                <>
                  <div className="img-div">
                    <img className="label-img" src={t4} />
                  </div>
                  <div className="res-h3"> Protaginist-ENFJ</div>
                  <a href="/personalities/protagonist">
                    <button className="label-btn">
                      Read about your personality
                    </button>
                  </a>
                </>
              )}
              {label == "Campaigner" && (
                <>
                  <div>
                    <img className="label-img" src={t5} />
                  </div>
                  <div className="res-h3"> Campaigner-ENFP</div>
                  <a href="/personalities/campaigner">
                    <button className="label-btn">
                      Read about your personality
                    </button>
                  </a>
                </>
              )}
              {/* </div> */}
              {/* <div className="label-c">
            {label == "Logician" && <Logician />}
            {label == "Logistician" && <Logistician />}
            {label == "Entertainer" && <Entertainer />}
            {label == "Protagonist" && <Protaginist />}
            {label == "Campaigner" && <Campaigner />}
          </div> */}
            </div>
            {/* <div><Logician/> </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalityTest;
