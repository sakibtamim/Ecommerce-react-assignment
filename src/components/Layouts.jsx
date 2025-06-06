import React from "react";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
