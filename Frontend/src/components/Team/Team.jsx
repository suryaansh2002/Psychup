import React from "react";
import "./Team.css";
import sr from "../../images/sr.png";
import tj from "../../images/tj.jpeg";

import TeamCard from "./TeamCard";
export default function Team() {
  const members = [
    {
      name: "Suryaansh Rathinam",
      role: "Web Developer",
      imgSrc: sr,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra nunc, vel gravida eros blandit non. Phasellus ut risus vel odio malesuada pretium. Maecenas semper sagittis nibh, ac consectetur.",
    },

    {
      name: "Trisha Jaipuriar",
      role: "Designer",
      imgSrc: tj,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra nunc, vel gravida eros blandit non. Phasellus ut risus vel odio malesuada pretium. Maecenas semper sagittis nibh, ac consectetur.",
    }, {
        name: "Suryaansh Rathinam",
        role: "Web Developer",
        imgSrc: sr,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra nunc, vel gravida eros blandit non. Phasellus ut risus vel odio malesuada pretium. Maecenas semper sagittis nibh, ac consectetur.",
      },
  
      {
        name: "Trisha Jaipuriar",
        role: "Designer",
        imgSrc: tj,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra nunc, vel gravida eros blandit non. Phasellus ut risus vel odio malesuada pretium. Maecenas semper sagittis nibh, ac consectetur.",
      },
      {
        name: "Suryaansh Rathinam",
        role: "Web Developer",
        imgSrc: sr,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra nunc, vel gravida eros blandit non. Phasellus ut risus vel odio malesuada pretium. Maecenas semper sagittis nibh, ac consectetur.",
      },
  
      {
        name: "Trisha Jaipuriar",
        role: "Designer",
        imgSrc: tj,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra nunc, vel gravida eros blandit non. Phasellus ut risus vel odio malesuada pretium. Maecenas semper sagittis nibh, ac consectetur.",
      },
  ];

  return (
    <div className="teams-main">
      <div className="team-title">Our Team</div>
      <div className="t-card-container">
        {members.map((member) => (
          <TeamCard
            name={member.name}
            imgSrc={member.imgSrc}
            role={member.role}
            quote={member.quote}
          />
          
        ))}
      </div>
    </div>
  );
}
