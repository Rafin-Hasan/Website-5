import React from "react";
import Navber from "../Components/Navbar/Navber";
import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../Components/Responsive Navbar/ResponsiveNavbar";

const LayoutOne = () => {
  return (
    <>
      <Navber />
      <ResponsiveNavbar />
      <Outlet />
    </>
  );
};

export default LayoutOne;
