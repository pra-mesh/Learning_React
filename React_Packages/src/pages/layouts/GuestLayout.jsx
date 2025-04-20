import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
const GuestLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuestLayout;
