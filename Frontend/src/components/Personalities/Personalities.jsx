import React, { useState, useEffect } from "react";
import Logician from "./logician";
import Logistician from "./logistician";
import Entertainer from "./entertainer";
import Campaigner from "./campaigner";
import Protaginist from "./protaginist";
import "./Personalities.css";

export default function Personalities() {
  const [pers, setPers] = useState();
  useEffect(() => {
    const arr = window.location.href.split("/");
    setPers(arr[4]);
  }, []);
  return (
    <div className="personalities-main">
      <div className="pers-c">
        {pers == "logician" && <Logician />}
        {pers == "logistician" && <Logistician />}
        {pers == "entertainer" && <Entertainer />}
        {pers == "protagonist" && <Protaginist />}
        {pers == "campaigner" && <Campaigner />}
      </div>
    </div>
  );
}
