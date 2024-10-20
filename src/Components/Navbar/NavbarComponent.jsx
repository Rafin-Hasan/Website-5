import React from "react";
import { Link } from "react-router-dom";
import "./NavberComponent.css";
import Banner from "../Banner/Banner";

const NavbarComponent = () => {
  return (
    <>
      {/* <Banner /> */}
      <nav className="navbar ">
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="logo-container">
            <img src="./Image/logo.png" alt="logo" className="logo" />
          </Link>

          {/* Navigation Links */}
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/schedule" className="nav-link">
              Schedule
            </Link>
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>
          </div>

          {/* Check Status Button */}
          <Link to="#" className="check-status-btn">
            Check Status
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
