import React from "react";
import "./MobileHeader.css";

function MobileHeader({ isOpen, setIsOpen }) {
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mobile">
      <div className="close-icon" onClick={onClickHandler}>
        <i className="fi fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#about-me" onClick={onClickHandler}>
            <i className="fi fi-rr-user option-icon"></i>
            About Me
          </a>
        </div>
        <div className="mobile-option">
          <a href="#project" onClick={onClickHandler}>
            <i className="fi fi-rr-briefcase option-icon"></i>
            Projects
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills" onClick={onClickHandler}>
            <i className="fi fi-rr-protractor option-icon"></i>
            Skills
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact" onClick={onClickHandler}>
            <i className="fi fi-rr-envelope option-icon"></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
