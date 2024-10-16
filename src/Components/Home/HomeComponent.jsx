import React from "react";
import "./HomeComponent.css";
import Banner from "../Banner/Banner";

const HomeComponent = () => {
  return (
    <section className="bg ">
      <Banner />
      <div className="flex justify-between">
        <div>
          <div className="text-center  text-white p-10 rounded-lg ">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#17C2EC] mb-4">
              Get Vaccinated. Boost your Immune System
            </h2>
            <h1 className="text-3xl font-bold mb-4">
              COVID-19 Vaccination Got Easier With,
            </h1>
            <h1 className="text-3xl font-bold text-cyan-400">Vaccination.ng</h1>
            <p className="text-sm mt-4 mb-8">
              Vaccination.ng will help you find the nearest centre for
              vaccination, in all 36 states in Nigeria.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-cyan-400 text-white py-2 px-6 rounded-full hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300">
                Get Vaccine
              </button>
              <button className="bg-transparent border border-cyan-400 text-cyan-400 py-2 px-6 rounded-full hover:bg-cyan-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-300">
                Help Centre
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src="./Image/banner.png" alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
