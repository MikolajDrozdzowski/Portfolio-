import React from "react";
import { SocialData } from "../../../data/social";

import "./SocialContact.css";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            key={item.platform}
          >
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" alt="" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
