import React from "react";
import "./Text.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Text() {
  return (
    <div className="text">
      <div className="text-wrapper">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <button>Register</button>
      </div>
      {/* <div className="mediaIcon">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} color="#fff" size="lg" />
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faTwitter} color="#fff" size="lg" />
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} color="#fff" size="lg" />
        </div>
      </div> */}
    </div>
  );
}

export default Text;
