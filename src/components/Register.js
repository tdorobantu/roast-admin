import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import isEmpty from "lodash/isEmpty";
import "./Start.css";
import * as api from "../api";
import normalizeEmail from "validator/lib/normalizeEmail";

const Register = ({ setPage }) => {
  const passLength = 8;

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [message, setMessage] = useState({
    email: "",
    password: "",
    name: "",
    server: "",
  });

  const handleEmailInput = (event) => {
    setCredentials((prev) => {
      return { ...prev, email: event.target.value };
    });
  };

  const handleNameInput = (event) => {
    setCredentials((prev) => {
      return { ...prev, name: event.target.value };
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
    // reset message and validations states
    setMessage((prev) => {
      return { email: "", password: "", name: "" };
    });

    setValidations((prev) => {
      return {
        name: false,
        email: false,
        password: false,
      };
    });

    // declare regex pattern for name validation
    let format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

    // declare regex patterns for string sanitization
    const blacklistName = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/g;
    const blacklistEmail = /[` !#$%^&*()_+\-=[\]{};':"\\|,<>/?~]/g;

    console.log('original >>>', credentials.email)
    console.log('replaced >>>', credentials.email.replace(blacklistEmail, ''))

    // Set password validator options
    const passOptions = {
      minLength: passLength,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
    };

    // Validate Name
    if (format.test(credentials.name)) {
      setMessage((prev) => {
        return {
          ...prev,
          name: "Invalid name provided! Name must contain only letters, digits and space(s).",
        };
      });
      setValidations((prev) => {
        return { ...prev, name: false };
      });
    }
    if (isEmpty(credentials.name)) {
      setMessage((prev) => {
        return { ...prev, name: "Name field is empty!" };
      });
      setValidations((prev) => {
        return { ...prev, name: false };
      });
    }
    if (!format.test(credentials.name) && !isEmpty(credentials.name)) {
      setMessage((prev) => {
        return { ...prev, name: "" };
      });
      setValidations((prev) => {
        return { ...prev, name: true };
      });
    }

    // Validate email
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
    }
    if (isEmpty(credentials.email)) {
      setMessage((prev) => {
        return { ...prev, email: "Email field is empty!" };
      });
      setValidations((prev) => {
        return { ...prev, email: false };
      });
    }
    if (isEmail(credentials.email)) {
      setMessage((prev) => {
        return { ...prev, email: "" };
      });
      setValidations((prev) => {
        return { ...prev, email: true };
      });
    }
    // Validate password
    if (!isStrongPassword(credentials.password, passOptions)) {
      setMessage((prev) => {
        return {
          ...prev,
          password:
            "Bad password! Password must be 8 or more characters long and contain at least one symbol, number, lowercase letter and uppercase letter. ",
        };
      });
      setValidations((prev) => {
        return { ...prev, password: false };
      });
    }
    if (isEmpty(credentials.password)) {
      setMessage((prev) => {
        return { ...prev, password: "Password field is empty!" };
      });
      setValidations((prev) => {
        return { ...prev, password: false };
      });
    }
    if (isStrongPassword(credentials.password, passOptions)) {
      setMessage((prev) => {
        return { ...prev, password: "" };
      });
      setValidations((prev) => {
        return { ...prev, password: true };
      });
    }

    // Submit if valid form
    if (validations.name && validations.email && validations.password) {
      const requestCredentials = {
        name: credentials.name.replace(blacklistName, ""),
        email: normalizeEmail(credentials.email).replace(blacklistEmail, ""),
        password: credentials.password,
      };
      console.table(requestCredentials)
      const response = await api.register(requestCredentials);
    }
  };

  return (
    <div className="register__container">
      {" "}
      <h1 className="register__header">Register Page</h1>
      <p className="register__message">{message.name}</p>
      <p className="register__message">{message.email}</p>
      <p className="register__message">{message.password}</p>
      <p className="register__message">{message.server}</p>
      <input
        onChange={(event) => handleNameInput(event)}
        className="register__input register__input--name"
        type="text"
        placeholder="name"
        required
        maxlength="400"
      ></input>
      <input
        onChange={(event) => handleEmailInput(event)}
        className="register__input register__input--email"
        type="email"
        placeholder="email"
        maxlength="40"
        required
      ></input>
      <input
        onChange={(event) => handlePasswordInput(event)}
        className="register__input register__input--password"
        type="password"
        placeholder="password"
        maxlength="40"
        required
      ></input>
      <PasswordStrengthBar
        password={credentials.password}
        minLength={passLength}
      />
      <button onClick={handleSubmit} className="register__submitBtn">
        Register
      </button>
      <button
        className="register__switchBtn"
        onClick={() => handleClick("login")}
      >
        Have an account? Login!
      </button>
    </div>
  );
};

export default Register;
