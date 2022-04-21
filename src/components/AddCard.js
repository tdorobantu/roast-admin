import React, { useState } from "react";
import "./Card.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createCampaign } from "../redux/slices/campaignSlice";
import { v4 as uuidv4 } from "uuid";

const AddCard = () => {
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    title: "",
    date: "",
    coupons: "",
    product: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleInitiate = () => {
    const campaign = { id: uuidv4(), ...fields };
    dispatch(createCampaign(campaign));
    setFields((prev) => {
      return {
        title: "",
        date: "",
        coupons: "",
        product: "",
      };
    });
  };

  return (
    <div className="card__container">
      <input
        placeholder="Campaign Name"
        value={fields.title}
        type="text"
        name={"title"}
        className={"title__value"}
        onChange={handleChange}
      />
      <div className="card__body">
        <div className="card__date">
          <p className="date__label">Campaign End: </p>
          <input
            value={fields.date}
            type="text"
            name={"date"}
            className={"date__value"}
            onChange={handleChange}
          />
        </div>
        <div className="card__coupons">
          <p className="coupons_label">Coupons: </p>
          <input
            value={fields.coupons}
            type="text"
            name={"coupons"}
            className={"coupons__value"}
            onChange={handleChange}
          />
        </div>
        <div className="card__product">
          <p className="product__label">Product: </p>
          <input
            value={fields.product}
            type="text"
            name={"product"}
            className={"product__value"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card__footer">
        <Button onClick={handleInitiate}>Initiate</Button>
      </div>
    </div>
  );
};

export default AddCard;
