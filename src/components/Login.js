import React, { useState } from "react";
import "./Start.css";
import isEmail from "validator/lib/isEmail";
import isEmpty from "lodash/isEmpty";
import * as api from "../api";
import normalizeEmail from "validator/lib/normalizeEmail";

const Login = ({ setPage }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    server: "",
  });
  const [validations, setValidations] = useState({
    email: false,
    password: false,
  });
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

  const handleSubmit = async () => {
    const blacklistEmail = /[` !#$%^&*()_+\-=[\]{};':"\\|,<>/?~]/g;

    // reset message and validations states
    setMessage((prev) => {
      return { email: "", password: "", server: "" };
    });

    setValidations((prev) => {
      return {
        email: false,
        password: false,
      };
    });

    if (!isEmail(credentials.email)) {
      setMessage((prev) => {
        return {
          ...prev,
          email: "Invalid email provided!",
        };
      });
      setValidations((prev) => {
        return { ...prev, email: false };
      });
    } else if (isEmpty(credentials.email)) {
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

    if (isEmpty(credentials.password)) {
      setMessage((prev) => {
        return { ...prev, password: "Password field is empty!" };
      });
      setValidations((prev) => {
        return { ...prev, password: false };
      });
    } else {
      setValidations((prev) => {
        return { ...prev, password: true };
      });
    }

    if (validations.email && validations.password) {
      const requestCredentials = {
        email: normalizeEmail(credentials.email).replace(blacklistEmail, ""),
        password: credentials.password,
      };

      try {
        const response = await api.login(requestCredentials);
        setMessage((prev) => {
          return { ...prev, server: response.data.message };
        });
      } catch (error) {
        console.error(error.response.data);
        setMessage((prev) => {
          return { ...prev, server: error.response.data.message };
        });
      }
    }
  };

  return (
    <div className="login__container">
      <h1 className="login__header">Login Page</h1>
      <p className="login__message">{message.email}</p>
      <p className="login__message">{message.password}</p>
      <p className="login__message">{message.server}</p>
      <input
        onChange={(event) => handleEmailInput(event)}
        className="login__input login__input--email"
        type="email"
        placeholder="email"
        required
        maxLength="40"
      ></input>
      <input
        onChange={handlePasswordInput}
        className="login__input login__input--password"
        type="password"
        placeholder="password"
        maxLength="40"
      ></input>
      <button onClick={handleSubmit} className="login__submitBtn">
        Login
      </button>
      <button
        className="login__forgotBtn"
        onClick={() => handleClick("forgot")}
      >
        Forgot Password!
      </button>
      <button
        className="login__switchBtn"
        onClick={() => handleClick("register")}
      >
        Don't have an account? Register!
      </button>
    </div>
  );
};

export default Login;
