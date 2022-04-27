import React, { useState } from "react";
import "./Start.css";

const ForgotPassword = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailInput = (event) => {
    setEmail((prev) => {
      return { ...prev, email: event.target.value };
    });
  };

  const handleClick = (page) => {
    setPage((prev) => page);
  };

  const handleSubmit = () => {
    console.log("credentials: ", email);
  };

  return (
    <div className="forgot__container">
      <h1 className="forgot__header">Forgot Password Page</h1>
      <p>{message}</p>
      <input
        onChange={(event) => handleEmailInput(event)}
        className="forgot__input forgot__input--email"
        type="email"
        placeholder="email"
      ></input>
      <button onClick={handleSubmit} className="forgot__submitBtn">
        Reset Password
      </button>
      <button className="forgot__switchBtn" onClick={() => handleClick("login")}>
        Back to Login Page
      </button>
    </div>
  );
};

export default ForgotPassword;
