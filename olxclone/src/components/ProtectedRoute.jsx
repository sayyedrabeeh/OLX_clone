// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    return <Navigate to="/" replace />;  
  }

  return children;
};

export default ProtectedRoute;
