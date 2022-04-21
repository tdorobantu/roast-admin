import React from "react";
import "./Campaign.css";
import { Button } from "@mui/material";
import Card from "./Card";
import AddCard from "./AddCard";
import { useSelector } from "react-redux";
import { selectCards } from "../redux/slices/campaignSlice";

const Campaign = () => {

  const cards = useSelector(selectCards)

  return (
    <div className="campaign__container">
      <div className="campaign__header">
        <p
          className="campaign__title
      "
        >
          Marketing Campaign Manager
        </p>
        <Button className="campaign__createCampaignBtn">Create Campaign</Button>
      </div>
      <div className="campaign__cards">
        <div className="campaign__grid">
          {cards.map(card => <Card key={card.id} state={card}/>)}
          <AddCard />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
