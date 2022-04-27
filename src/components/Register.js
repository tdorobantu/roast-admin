import React, { useState } from "react";
import "./Start.css"

const Register = ({ setPage }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
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

  const handleSubmit = () => {
    console.log("credentials: ", credentials);
  };

  return (
    <div className="register__container">
      {" "}
      <h1 className="register__header">Register Page</h1>
      <input
        onChange={(event) => handleNameInput(event)}
        className="register__input register__input--name"
        type="text"
        placeholder="name"
      ></input>
      <input
        onChange={(event) => handleEmailInput(event)}
        className="register__input register__input--email"
        type="email"
        placeholder="email"
      ></input>
      <input
        onChange={handlePasswordInput}
        className="register__input register__input--password"
        type="password"
        placeholder="password"
      ></input>
      <button onClick={handleSubmit} className="register__submitBtn">
        Register
      </button>
      <button className="register__switchBtn" onClick={() => handleClick("login")}>
        Have an account? Login!
      </button>
    </div>
  );
};

export default Register;
