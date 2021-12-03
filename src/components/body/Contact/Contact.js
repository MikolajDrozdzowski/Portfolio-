import React from "react";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/social-contact/SocialContact";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of these platforms:</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download
            href={require("../../../assets/MikolajDrozdzowski-resume.pdf").default}
          >
            <i className="fi fi-rr-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
