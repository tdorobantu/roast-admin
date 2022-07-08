import React, { useState, useCallback, useEffect } from "react";
import "./Home.css";
import * as api from "../api/index.js";

const Home = () => {
  const [message, setMessage] = useState("Loading...");

  const getTruth = useCallback(async () => {
    try {
      const response = await api.initApp();
      setMessage((prev) => response.data.message);
    } catch (error) {
      setMessage((prev) => error.response.data.message);
    }
  }, []);

  useEffect(() => {
    getTruth();
  }, []);

  return (
    <div className="home__wrapper">
      <h1>Home</h1>
      <p className="home__message">{message}</p>
    </div>
  );
};

export default Home;
