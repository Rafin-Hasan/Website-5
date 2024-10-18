import React from "react";
import "./ResponsiveNavbar.css";
import { FiAlignRight } from "react-icons/fi";

const ResponsiveNavbar = () => {
  return (
    <nav className="resNav">
      <div className="resMenu ">
        <div className="logoDiv">
          <img className="logo" src="./Image/logo.png" alt="logo" />
        </div>
        <div className="icon">
          <FiAlignRight />
        </div>
      </div>
      <div className="popupMenu">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Schedule</li>
          <li>Contact us</li>
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
