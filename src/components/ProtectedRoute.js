import React, { useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";
import { getJwtToken } from "../services/storageJWT";
import Start from "./Start";

const ProtectedRoute = ({ children }) => {
  return getJwtToken() !== null ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
