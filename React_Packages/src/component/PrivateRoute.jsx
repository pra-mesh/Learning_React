import React, { Children } from "react";
import { Navigate, useLocation } from "react-router";
import Unauthorized from "../pages/Unauthorized";
const isLoggedIn = () => {
  return true;
};
const isValidRole = (role) => {
  return false;
};
//HOC
const PrivateRoute = ({ c: component, role }) => {
  const { pathname } = useLocation();
  return (
    <>
      {isLoggedIn() && !isValidRole(role) ? (
        <Navigate replace to="/unauthorized" />
      ) : !isLoggedIn() && !isValidRole(role) ? (
        <Navigate replace to={`/auth/login?redirect=${pathname}`} />
      ) : (
        component
      )}
    </>
  );
};

export default PrivateRoute;
