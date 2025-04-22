import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
const GuestLayout = () => {
  return (
    <div style={{ height: "900px" }}>
      <Header />
      <div className="h-75 d-inline-block">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
