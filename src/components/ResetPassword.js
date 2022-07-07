import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import isJWT from "validator/lib/isJWT";
import * as api from "./../api/index";
import isStrongPassword from "validator/lib/isStrongPassword";
import "./ResetPassword.css";

const ResetPassword = () => {
  const passOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
  };

  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // get token
    const token = searchParams.get("token");
    setToken((prev) => token);

    // navigate to login if token param is invalid
    if (token === null || !isJWT(token)) navigate(-1, { replace: true });

    // Remove token from URL to prevent http referer leakage
    setSearchParams({ token: "" });
  }, []);

  const handleSubmit = async () => {
    console.log(password);
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    if (!isStrongPassword(password, passOptions)) {
      setMessage(
        "Bad password! Password must be 8 or more characters long and contain at least one symbol, number, lowercase letter and uppercase letter. "
      );
      return;
    }
    try {
      await api.resetPassword({ token: token, password: password });
      setMessage(
        "Password changed successfully! You may login with your new credentials!"
      );
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="resetPassword__wrapper">
      <h1 className="resetPassword__header">Reset Password</h1>
      <p className="resetPassword__message">{message}</p>
      <input
        className="resetPassword__input resetPassword__input--pass"
        type="password"
        placeholder="New Password"
        onChange={(e) => setPassword((prev) => e.target.value)}
      />
      <input
        className="resetPassword__input resetPassword__input--confirm"
        type="password"
        placeholder="Confirm New Password"
        onChange={(e) => setConfirmPassword((prev) => e.target.value)}
      />
      <button className="resetPassword__submit" onClick={handleSubmit}>
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

export default ResetPassword;
