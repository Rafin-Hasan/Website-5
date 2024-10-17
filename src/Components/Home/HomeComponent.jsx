import React from "react";
import "./HomeComponent.css";

const HomeComponent = () => {
  return (
    <section className="bg-blue-950 ">
      {/* <Banner /> */}
      <div className="flex justify-between">
        <div>
          <div className="  text-white p-10 rounded-lg ">
            <h2 className="text-[24px] font-bold font-montserrat  tracking-wider text-skyBlue mb-4">
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
            <div className="flex space-x-3 p-4">
              <button className="bg-skyBlue text-white font-medium py-2 px-5 rounded-full shadow-lg transition duration-200 transform hover:bg-cyan-600 hover:scale-105">
                Get Vaccine
              </button>
              <button className=" text-white font-medium py-2 px-5 rounded-full border border-cyan-500 shadow-lg transition duration-200 transform hover:bg-cyan-500 hover:border-cyan-600 hover:scale-105">
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
