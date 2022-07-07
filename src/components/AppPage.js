import React from "react";
import Account from "../pages/Account";
import Campaign from "../pages/Campaign";
import SimpleNavBar from "./SimpleNavBar";
import Tables from "../pages/Tables";




const AppPage = ({page}) => {

const renderPage = (page) => {
    switch (page) {
      case "campaign":
        return <Campaign/>;
      case "tables":
        return <Tables/>;
      case "account":
        return <Account/>;
      default:
        break;
    }
  };

  return (
    <div className="appPage__container">
        <div className="appPage__header"><SimpleNavBar/></div>
        <div className="appPage__body">{renderPage(page)}</div>
    </div>
  );
};

export default AppPage;