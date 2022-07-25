import React, { useState, useCallback, useEffect } from "react";
import "./Home.css";
import * as api from "../api/index.js";
import { deleteJwtToken, deleteRefreshToken } from "../services/storageJWT";
import { useNavigate } from "react-router-dom";
import logout from "../services/logout";
import Logout from "./Logout";

const Home = () => {
  const [message, setMessage] = useState("Loading...");

  const navigate = useNavigate();

  const getTruth = useCallback(async (navigateFn) => {
    try {
      const response = await api.initApp();
      setMessage((prev) => response.data.message);
      if (response.status !== 200) {
        logout(navigateFn);
      }
    } catch (error) {
      logout(navigateFn);
      // setMessage((prev) => error.response.data.message);
    }
  }, []);

  useEffect(() => {
    getTruth(navigate);
  }, []);

  return (
    <div className="home__wrapper">
      <h1>Home</h1>
      <p className="home__message">{message}</p>
      <Logout />
    </div>
  );
};

export default Home;
