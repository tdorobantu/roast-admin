import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import RegisterSuccess from "./RegisterSuccess";

const Start = () => {
  const [page, setPage] = useState("login");

  const renderPage = (page, setPage) => {
    switch (page) {
      case "login":
        return <Login setPage={setPage} />;
      case "register":
        return <Register setPage={setPage} />;
      case "forgot":
        return <ForgotPassword setPage={setPage} />;
      case "registerSuccess":
        return <RegisterSuccess setPage={setPage} />;
      default:
        break;
    }
  };

  return <>{renderPage(page, setPage)}</>;
};

export default Start;
