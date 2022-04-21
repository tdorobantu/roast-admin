import React from "react";
import "./Campaign.css"
import { Button } from "@mui/material";
import Card from "./Card"

const Campaign = () => {
  return (
    <div className="campaign__container">
        <div className="campaign__header">
      <p className="campaign__title
      ">Marketing Campaign Manager</p>
      <Button className="campaign__createCampaignBtn">Create Campaign</Button>
      </div>
      <div className="campaign__cards">
          <Card/>
      </div>
    </div>
  );
};

export default Campaign;
