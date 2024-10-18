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
        <div>
          <FiAlignRight />
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
