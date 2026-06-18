import React from "react";
import Navbar from "../components/comon/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/comon/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
