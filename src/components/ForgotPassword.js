import React, { useState } from "react";
import "./Start.css";
import isEmpty from "lodash/isEmpty";
import isEmail from "validator/lib/isEmail";
import * as api from "../api";
import normalizeEmail from "validator/lib/normalizeEmail";

const ForgotPassword = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ email: "", server: "" });
  const [validations, setValidations] = useState({ email: false });

  const handleEmailInput = (event) => {
    setEmail((prev) => event.target.value);
  };

  const handleClick = (page) => {
    setPage((prev) => page);
  };

  const handleSubmit = async () => {
    const blacklistEmail = /[` !#$%^&*()_+\-=[\]{};':"\\|,<>/?~]/g;

    // reset message and validations states
    setMessage((prev) => {
      return { email: "", server: "" };
    });

    setValidations((prev) => {
      return {
        email: false,
      };
    });

    //check if email input is valid
    if (!isEmail(email)) {
      setMessage((prev) => {
        return {
          ...prev,
          email: "Invalid email provided!",
        };
      });
      setValidations((prev) => {
        return { ...prev, email: false };
      });
    } else if (isEmpty(email)) {
      setMessage((prev) => {
        return { ...prev, email: "Email field is empty!" };
      });
      setValidations((prev) => {
        return { ...prev, email: false };
      });
    } else {
      setValidations((prev) => {
        return { ...prev, email: true };
      });
    }

    try {
      const response = await api.forgotPass({
        email: normalizeEmail(email).replace(blacklistEmail, ""),
      });
      setMessage((prev) => {
        return { ...prev, server: response.data.message };
      });
    } catch (error) {
      setMessage((prev) => {
        return { ...prev, server: error.response.data.message };
      });
    }
  };

  return (
    <div className="forgot__container">
      <h1 className="forgot__header">Forgot Password Page</h1>
      <p className="forgot__message">{message.email}</p>
      <p className="forgot__message">{message.server}</p>
      <input
        onChange={(event) => handleEmailInput(event)}
        className="forgot__input forgot__input--email"
        type="email"
        placeholder="email"
      ></input>
      <button onClick={handleSubmit} className="forgot__submitBtn">
        Reset Password
      </button>
      <button
        className="forgot__switchBtn"
        onClick={() => handleClick("login")}
      >
        Back to Login Page
      </button>
    </div>
  );
};

export default ForgotPassword;
