import React, { useState } from "react";
import "./Header.css";
import WebHeader from "./web/WebHeader";
import MobileHeader from "./mobile/MobileHeader";
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <a href="#about">Portfolio</a>
      </div>
      <div className="menu">
        <div className="web-menu">
          <WebHeader />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            {/* <i className="fi fi-rr-menu-burger menu-icon"></i> */}
            <MenuIcon className='menu-icon' fontSize='large'  />
          </div>
          {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
