import "./PersonalityTest.css";
import axios from "axios";
import { useState } from "react";
import Question from "./Question";

function PersonalityTest() {
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
      {
        item: "I contradict others",
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
        response: `${a8}`,
      },
      {
        item: " I rush into things",
        response: `${a9}`,
      },
      {
        item: "I laugh my way through life",
        response: `${a10}`,
      },
      {
        item: " I have a sharp tongue",
        response: `${a11}`,
      },
      {
        item: "I break rules",
        response: `${a12}`,
      },
      {
        item: "I seldom get emotional",
        response: `${a13}`,
      },
      {
        item: "I act wild and crazy",
        response: `${a14}`,
      },
      {
        item: "I avoid contacts with others",
        response: `${a15}`,
      },
      {
        item: " I love large parties",
        response: `${a16}`,
      },
      {
        item: "I enjoy wild flights of fantasy",
        response: `${a17}`,
      },
      {
        item: "I easily resist temptations",
        response: `${a18}`,
      },
      {
        item: "I love to read challenging material",
        response: `${a19}`,
      },
      {
        item: "I believe that we coddle criminals too much",
        response: `${a20}`,
      },
      {
        item: "I have a high opinion of myself",
        response: `${a21}`,
      },
      {
        item: " I use flattery to get ahead",
        response: `${a22}`,
      },
      {
        item: " I leave a mess in my room",
        response: `${a23}`,
      },
      {
        item: "I am comfortable in unfamiliar situations",
        response: `${a24}`,
      },
      {
        item: "I start tasks right away",
        response: `${a25}`,
      },
      {
        item: "I misjudge situations",
        response: `${a26}`,
      },
      {
        item: "I can not stand weak people",
        response: `${a27}`,
      },
      {
        item: "I distrust people.",
        response: `${a28}`,
      },
      {
        item: "I feel that I am unable to deal with things",
        response: `${a29}`,
      },

      //add the variables here
    ],
    profile: { inventories: ["big5"], indices: ["withdrawal"] },
  };
  //data.facts[i].item not getting referenced

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.facts);
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
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="personality-main">
      <h1>Personality Test</h1>
      <form method="post" name="myForm" autocomplete="on">
        <Question i={1} question={data.facts[0].item} function={setA1} />
        <Question i={2} question={data.facts[1].item} function={setA2} />
        <Question i={3} question={data.facts[2].item} function={setA3} />
        <Question i={4} question={data.facts[3].item} function={setA4} />
        <Question i={5} question={data.facts[4].item} function={setA5} />
        <Question i={6} question={data.facts[5].item} function={setA6} />
        <Question i={7} question={data.facts[6].item} function={setA7} />
        <Question i={8} question={data.facts[7].item} function={setA8} />
        <Question i={9} question={data.facts[8].item} function={setA9} />
        <Question i={10} question={data.facts[9].item} function={setA10} />
        <Question i={11} question={data.facts[10].item} function={setA11} />
        <Question i={12} question={data.facts[11].item} function={setA12} />
        <Question i={13} question={data.facts[12].item} function={setA13} />
        <Question i={14} question={data.facts[13].item} function={setA14} />
        <Question i={15} question={data.facts[14].item} function={setA15} />
        <Question i={16} question={data.facts[15].item} function={setA16} />
        <Question i={17} question={data.facts[16].item} function={setA17} />
        <Question i={18} question={data.facts[17].item} function={setA18} />
        <Question i={19} question={data.facts[18].item} function={setA19} />
        <Question i={20} question={data.facts[19].item} function={setA20} />
        <Question i={21} question={data.facts[20].item} function={setA21} />
        <Question i={22} question={data.facts[21].item} function={setA22} />
        <Question i={23} question={data.facts[22].item} function={setA23} />
        <Question i={24} question={data.facts[23].item} function={setA24} />
        <Question i={25} question={data.facts[24].item} function={setA25} />
        <Question i={26} question={data.facts[25].item} function={setA26} />
        <Question i={27} question={data.facts[26].item} function={setA27} />
        <Question i={28} question={data.facts[27].item} function={setA28} />
        <Question i={29} question={data.facts[28].item} function={setA29} />
      </form>
      <button onClick={handleSubmit}>Submit</button>

      <div className="profile">{arr}</div>
    </div>
  );
}

export default PersonalityTest;
