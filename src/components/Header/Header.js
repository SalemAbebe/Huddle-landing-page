import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="header">
      Header
      <div className="headerWrapper">
        <input></input>
        <FontAwesomeIcon icon="fas fa-bars" />
      </div>
    </div>
  );
}

export default Header;
