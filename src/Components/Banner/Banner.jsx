import React from "react";
import "./Banner.css";
import { FiClock } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="banner bg-[url('/Image/homebg.png')]">
      <div className="container">
        <div className="home-container">
          <div>
            <div className="home-text-container">
              <h2 className="home-heading-small">
                Get Vaccinated. Boost your Immune System
              </h2>
              <h1 className="home-heading-large">
                COVID-19 Vaccination Got Easier With,
                <span className="home-brand-name">Vaccination.ng</span>
              </h1>
              <p className="home-description">
                Vaccination.ng will help you find the nearest centre for
                vaccination, in all 36 states in Nigeria.
              </p>
              <div className="home-button-group">
                <button className="btn-vaccine">Get Vaccine</button>
                <button className="btn-help">Help Centre</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./Image/banner.png"
              alt="banner"
              className="home-banner-image"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="clock">
            <FiClock />
          </div>
          <div className="text">
            <p>Schedule your Vaccination</p>
          </div>
        </div>
        <div>
          <div className="shadow_div">
            <div className="main_div">
              <div className="info"></div>
              <div className="btn"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
