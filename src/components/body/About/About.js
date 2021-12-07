import React from "react";
import SocialContact from "../../common/social-contact/SocialContact";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, I am
          <br /> <span className="info-name">Mikołaj Drożdżowski</span>,
          <br /> Frontend web developer.
        </div>

        <div className="about-photo">
          <img
            src={require("../../../assets/picture5.svg").default}
            className="picture"
            alt=""
          />
        </div>
      </div>

      <SocialContact />
    </div>
  );
}

export default About;
