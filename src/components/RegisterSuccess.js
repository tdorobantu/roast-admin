import React, { useState } from "react";
import { login } from "../api";
import Login from "./Login";

const RegisterSuccess = ({setPage}) => {


  const handleClick = (page) => {
    setPage((prev) => page);
  };
  return (
    <div className="registerSuccess__container">
      <h1 className="registerSuccess__header">Succesfully Registered</h1>

     <button
        className="forgot__switchBtn"
        onClick={() => handleClick("login")}
      >
        Back to Login Page
      </button> 
      
    </div>
  );
};

export default RegisterSuccess;
