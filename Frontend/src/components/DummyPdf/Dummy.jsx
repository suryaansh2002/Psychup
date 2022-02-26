import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Dummy.css";
import t1 from "../../images/logician.png";
import html2pdf from "html2pdf.js";

export default function Dummy() {
  var c = 0.5;
  var n = 0.5;
  var e = 0.5;
  var o = 0.5;
  var a = 0.5;

  function handleDownload() {
    var content = document.getElementById("down");
    console.log(content);
    // console.log(window)
    html2pdf().from(content).save();
  }

  return (
    <>
      <button onClick={handleDownload}>Download</button>
      <div className="dum-cards" id="down">
        <div className="main-pdf">
          <h1>Shourya's Personality Scores</h1>
          <div className="div-cards">
            <div className="card-1 c1 new-c">
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

            <div className="card-1 c2 new-c">
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
          </div>

          <div className="div-cards">
            <div className="card-1 c3 new-c">
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

            <div className="card-1 c4 new-c">
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
          </div>

          <div className="card-1 c5 new-c">
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
          <h1 className="pers">Personality Label</h1>
          <div className="label-c">
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
          </div>
        </div>
      </div>
    </>
  );
}
