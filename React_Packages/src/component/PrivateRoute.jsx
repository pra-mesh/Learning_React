import React from "react";
import { Navigate, useLocation } from "react-router";
const isLoggedIn = () => {
  return true;
};
const isValidRole = () => {
  return true;
};
//HOC
const PrivateRoute = ({ c, role }) => {
  const { pathname } = useLocation();
  return (
    <>
      {isLoggedIn() && isValidRole() ? (
        c
      ) : isLoggedIn() && !isValidRole(role) ? (
        <Navigate replace to="/unauthorized" />
      ) : (
        <Navigate replace to={`/auth/login?redirect=${pathname}`} />
      )}
    </>
  );
};

export default PrivateRoute;
