import React from "react";
import "./Team.css";
import { members } from "./members";

import TeamCard from "./TeamCard";
export default function Team() {
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
            github={member.github}
            linkedin={member.linkedin}
            mail={member.mail}
            other={member.other}
          />
        ))}
      </div>
    </div>
  );
}
