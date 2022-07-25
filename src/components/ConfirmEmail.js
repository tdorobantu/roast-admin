import React, { useState, useEffect, useCallback } from "react";
import "./ConfirmEmail.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import isJWT from "validator/lib/isJWT";
import * as api from "./../api/index";

const ConfirmEmail = () => {
  const [message, setMessage] = useState("Verifying mail");
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [requestToken, setRequestToken] = useState(false);
  const [email, setEmail] = useState("");

  const confirmEmail = useCallback(async (token) => {
    try {
      const response = await api.confirmEmail({ token });
      setMessage((prev) => response.data.message);
    } catch (error) {
      if (error.response.data.errorType === "tokenExpired") {
        setRequestToken((prev) => true);
      }
      setMessage((prev) => error.response.data.message);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail((prev) => e.target.value);
  };

  const handleResendConfirmation = async () => {
    const blacklistEmail = /[` !#$%^&*()_+\-=[\]{};':"\\|,<>/?~]/g;
    // ! Handle messages
    await api.resendConfirmation({ email: email.replace(blacklistEmail, "") });
  };

  useEffect(() => {
    // get token
    const token = searchParams.get("token");
    console.log(token);

    // navigate to login if token param is invalid
    if (token === null || !isJWT(token)) navigate(-1, { replace: true });

    // Remove token from URL to prevent http referer leakage
    setSearchParams({ token: "" });

    // confirm email
    console.log("my token is: ", token);
    confirmEmail(token);
  }, []);

  return (
    <div className="confirmEmail__wrapper">
      <h1 className="confirmEmail__header">Confirm Email</h1>
      <p className="confirmEmail__message">{message}</p>
      {requestToken && (
        <>
          <input
            type="email"
            onChange={handleEmailChange}
            placeholder="email"
            maxLength="40"
            required
          />
          <button onClick={handleResendConfirmation}>
            Resend Confirmation Email
          </button>
        </>
      )}
    </div>
  );
};

export default ConfirmEmail;
