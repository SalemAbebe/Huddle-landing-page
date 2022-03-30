import React from "react";
import "./Illustration.css";
import MobileV from "../MobileV/MobileV";
import DesktopV from "../DesktopV/DesktopV";
import Text from "../Text/Text";

function Illustration() {
  return (
    <div className="illustration">
      <img
        src={process.env.PUBLIC_URL + "/images/illustration-mockups.svg"}
        className="me"
        alt="Self-Portrait"
      />
      <div className="dViews">{/* <DesktopV /> */}</div>
      {/* <div className="mView">
        <MobileV />
      </div> */}
    </div>
  );
}

export default Illustration;
