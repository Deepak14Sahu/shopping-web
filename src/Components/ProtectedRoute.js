import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("logging") === "true";
  return loggedIn ? children : <Navigate to="/login" />;
};

const ProtectedLoginRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("logging") === "true";
  return loggedIn ? <Navigate to="/products" /> : children;
};

export { ProtectedRoute, ProtectedLoginRoute };
