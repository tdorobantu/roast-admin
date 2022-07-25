import React from "react";
import logout from "../services/logout";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="logout__wrapper">
      <button onClick={() => logout(navigate)}>Logout</button>
    </div>
  );
};

export default Logout;
