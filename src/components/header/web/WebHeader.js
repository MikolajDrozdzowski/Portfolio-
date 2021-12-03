import React from "react";
import "./WebHeader.css";

function WebHeader() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#about-me">
          <i className="fi fi-rr-user option-icon"></i>
          About Me
        </a>
      </div>

      <div className="web-option">
        <a href="#project">
          <i className="fi fi-rr-briefcase option-icon"></i>
          Projects
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
          <i className="fi fi-rr-protractor option-icon"></i>
          Skills
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
          <i className="fi fi-rr-envelope option-icon"></i>
          Contact
        </a>
      </div>
    </div>
  );
}

export default WebHeader;
