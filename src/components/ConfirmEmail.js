import React, { useState, useEffect } from "react";
import "./ConfirmEmail.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import isJWT from "validator/lib/isJWT";
import * as api from "./../api/index"

const ConfirmEmail = () => {
  const [message, setMessage] = useState("Verifying mail");
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {

    // get token
    const token = searchParams.get("token");

    // navigate to login if token param is invalid
    if (token === null || !isJWT(token)) navigate("/");

    // Remove token from URL to prevent http referer leakage
    setSearchParams({token: "not_a_token"})    

    // confirm email
    try {
        // await api.confirmEmail(token)
    } catch (error) {

    }

  }, []);

  return (
    <div className="confirmEmail__wrapper">
      <h1 className="confirmEmail__header">Confirm Email</h1>
      <p className="confirmEmail__message">{message}</p>
    </div>
  );
};

export default ConfirmEmail;
