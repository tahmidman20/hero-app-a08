import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>
      <div className="flex-1 bg-[#d9d9d95b] pt-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />,
    </div>
  );
};

export default MainLayouts;
