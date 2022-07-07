import React, { useState, useEffect, useCallback } from "react";
import "./ConfirmEmail.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import isJWT from "validator/lib/isJWT";
import * as api from "./../api/index";

const ConfirmEmail = () => {
  const [message, setMessage] = useState("Verifying mail");
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const confirmEmail = useCallback(
    async (token) => {
      await api.confirmEmail(token);
      
    },
    []
  );

  useEffect(() => {
    // get token
    const token = searchParams.get("token");
    console.log(token);

    // navigate to login if token param is invalid
    if (token === null || !isJWT(token)) {
      navigate(-1, { replace: true });
    }

    // navigate to login if token param is valid
    if(isJWT(token)){
      setTimeout(navigate(-1,{replace:true}),5000);
    }

    // Remove token from URL to prevent http referer leakage
    setSearchParams({ token: "" });

    // confirm email
    try {
      confirmEmail({token});
    } catch (error) {}
  }, [confirmEmail]);

  return (
    <div className="confirmEmail__wrapper">
      <h1 className="confirmEmail__header">Confirm Email</h1>
      <p className="confirmEmail__message">{message}</p>
    </div>
  );
};

export default ConfirmEmail;
