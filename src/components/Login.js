import React, { useState } from "react";
import "./Start.css";

const Login = ({ setPage }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleEmailInput = (event) => {
    setCredentials((prev) => {
      return { ...prev, email: event.target.value };
    });
  };

  const handlePasswordInput = (event) => {
    setCredentials((prev) => {
      return { ...prev, password: event.target.value };
    });
  };

  const handleClick = (page) => {
    setPage((prev) => page);
  };

  const handleSubmit = () => {
    console.log("credentials: ", credentials);
  };

  return (
    <div className="login__container">
      <h1 className="login__header">Login Page</h1>
      <p>{message}</p>
      <input
        onChange={(event) => handleEmailInput(event)}
        className="login__input login__input--email"
        type="email"
        placeholder="email"
      ></input>
      <input
        onChange={handlePasswordInput}
        className="login__input login__input--password"
        type="password"
        placeholder="password"
      ></input>
      <button onClick={handleSubmit} className="login__submitBtn">
        Login
      </button>
      <button className="login__forgotBtn" onClick={() =>handleClick("forgot")}>
        Forgot Password!
      </button>
      <button className="login__switchBtn" onClick={() => handleClick("register")}>
        Don't have an account? Register!
      </button>
    </div>
  );
};

export default Login;
