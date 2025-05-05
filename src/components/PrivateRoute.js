import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "../auth"; // Make sure this checks if the user is admin

const PrivateRoute = () => {
  const result = isAdmin();
  console.log("PrivateRoute: isAdmin =", result); 
  return result ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
