import React from "react";
import Navber from "../../componets/Header/Navber";
import { Outlet } from "react-router";
import Footer from "../../componets/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
