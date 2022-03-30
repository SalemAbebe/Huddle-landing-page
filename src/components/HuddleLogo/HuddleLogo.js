import React from "react";
import "./HuddleLogo.css";

function HuddleLogo() {
  return (
    <div className="huddleLogo">
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + "/images/huddle.svg"}
          alt="Huddle logo"
        />
      </div>
    </div>
  );
}

export default HuddleLogo;
