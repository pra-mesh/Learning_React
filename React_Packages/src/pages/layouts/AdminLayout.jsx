import React from "react";
import AdminNavBar from "./AdminNavBar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
