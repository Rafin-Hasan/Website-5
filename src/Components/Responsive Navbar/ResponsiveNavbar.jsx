import React, { useState } from "react";
import "./ResponsiveNavbar.css";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const ResponsiveNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="resNav">
      {/* Overlay for blur effect */}
      <div
        className={`overlay ${menuOpen ? "showOverlay" : "hideOverlay"}`}
        onClick={toggleMenu}
      ></div>

      {/* Navbar */}
      <div className="resMenu">
        <div className="logoDiv">
          <img className="logo" src="./Image/logo.png" alt="logo" />
        </div>
        <div className="icon" onClick={toggleMenu}>
          {menuOpen ? <FiX className="closeIcon" /> : <FiAlignRight />}
        </div>
      </div>

      {/* Popup menu */}
      <div className={`popupMenu ${menuOpen ? "showMenu" : "hideMenu"}`}>
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
