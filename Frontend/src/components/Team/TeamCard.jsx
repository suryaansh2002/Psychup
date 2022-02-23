import React from "react";
import "./Team.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

export default function TeamCard(props) {
  return (
    <div className="t-card">
      <div>
        <img src={props.imgSrc} className="t-card-img"></img>
      </div>
      <div className="t-card-name">{props.name}</div>
      <div className="t-card-role">{props.role}</div>
      <div className="t-card-quote">{props.quote}</div>

      <div className="row">
        {props.github && (
          <a className="t-icon-c" href={props.github} target={"_blank"}>
            <FaGithub className="t-icon-c" />
          </a>
        )}
        {
          /* props.other && (
          <a className="t-icon-c" href={props.other} target={"_blank"}>
            <GiArchiveResearch className="t-icon-c" />
          </a> )*/
        }
        <a className="t-icon-c" href={props.linkedin} target={"_blank"}>
          <FaLinkedin className="t-icon-c" />
        </a>{" "}
        <a className="t-icon-c" href={props.mail} target={"_blank"}>
          <MdEmail className="t-icon-c" />
        </a>
      </div>
    </div>
  );
}
