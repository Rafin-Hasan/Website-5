import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="container mx-auto mt-[41px] mb-[100px] bg-blue-900 text-white px-4 py-2 flex items-center justify-between">
      {/* Logo Section */}
      <NavLink to="/" className="flex-shrink-0">
        <img src="./Image/logo.png" alt="logo" className="h-8 w-auto" />
      </NavLink>
      {/* Navigation Links */}
      <div className="flex space-x-8 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[24px] font-bold text-white"
              : "text-[#8588b0] text-[24px] font-medium "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[24px] font-bold text-white "
              : "text-[#8588b0] text-[24px] font-medium"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            isActive
              ? "text-[24px] font-bold text-white "
              : "text-[#8588b0] text-[24px] font-medium"
          }
        >
          Schedule
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[24px] font-bold text-white "
              : "text-[#8588b0] text-[24px] font-medium"
          }
        >
          Contact us
        </NavLink>
      </div>

      {/* Check Status Button */}
      <NavLink
        to="#"
        className="bg-[#C4C4C4] mont font-bold text-[24px] bg-opacity-[10%] text-[#17C2EC] py-2 px-4 rounded-[20px] shadow-lg"
      >
        Check Status
      </NavLink>
    </nav>
  );
};

export default NavbarComponent;
