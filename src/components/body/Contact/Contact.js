import React from "react";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/social-contact/SocialContact";
import "./Contact.css";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>I will be happy to tell you more about myself so do not hesitate to contact me:</p>
          <SocialContact />
        </div>
        <a
          download
          href={
            require("../../../assets/MikolajDrozdzowski-resume.pdf").default
          }
        >
          <div className="download">
            {/* <i className="fi fi-rr-download download-icon"></i> */}
            <SystemUpdateAltIcon fontSize="medium" className='download-icon'/>
            Download Resume
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
