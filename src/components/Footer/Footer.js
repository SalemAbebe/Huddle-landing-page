import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div className="mediaIcon">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} color="#fff" size="lg" />
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faTwitter} color="#fff" size="lg" />
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} color="#fff" size="lg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
