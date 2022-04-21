import React, { useState } from "react";
import "./Card.css";
import { Button } from "@mui/material";

const Card = () => {
  const [fields, setFields] = useState({
    campaignEnd: "",
    coupons: 0,
    campaignProduct: "",
  });

  return (
    <div className="card__container">
      <p className="card__headerText">Campaign#1</p>
      <div className="card__body">
        <div className="card__date">
          <p className="date__label">Campaign End: </p>
          <p className="date__value">23.02.04</p>
        </div>
        <div className="card__coupons">
          <p className="coupons_label">Coupons: </p>
          <p className="coupons__value">200 </p>
        </div>
        <div className="card__product">
          <p className="product__label">Product: </p>
          <p className="product__value">Cappuccino ☕️</p>
        </div>
      </div>
      <div className="card__footer">
        <Button>Initiate</Button>
      </div>
    </div>
  );
};

export default Card;
