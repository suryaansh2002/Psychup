import React, { useState, useEffect } from "react";
import Logician from "./logician";
import Logistician from "./logistician";
import Entertainer from "./entertainer";
import Campaigner from "./campaigner";
import Protaginist from "./protaginist";
import "./Personalities.css";

export default function Personalities(props) {
  const [pers, setPers] = useState();
  useEffect(() => {
    const arr = window.location.href.split("/");
    setPers(arr[4]);
  }, []);
  const handleLogout = async () => {
    console.log(props.cookie)

    await props.removeCookie("user");
    // console.log("logging")
    // console.log(props.removeCookie("user"))
      window.location.reload();

    try {
    } catch (error) {
      alert(error);
    }
  };
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
