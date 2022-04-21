import React, { useState } from "react";
import "./Card.css";
import { Button } from "@mui/material";

const Card = () => {
  const [edit, setEdit] = useState(false);
  const [fields, setFields] = useState({
    date: "23.04.2022",
    coupons: 200,
    product: "Cappuccino ☕️",
  });

  const handleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const renderField = (name, type) => {
    return type ? (
      <input
        value={fields[name]}
        type="text"
        name={name}
        className={`${name}__value--edit`}
        onChange={handleChange}
      />
    ) : (
      <p className={`${name}__value`}>{fields[name]}</p>
    );
  };

  return (
    <div className="card__container">
      <p className="card__headerText">Campaign#1</p>
      <div className="card__body">
        <div className="card__date">
          <p className="date__label">Campaign End: </p>
          {renderField("date", edit)}
        </div>
        <div className="card__coupons">
          <p className="coupons_label">Coupons: </p>
          {renderField("coupons", edit)}
        </div>
        <div className="card__product">
          <p className="product__label">Product: </p>
          {renderField("product", edit)}
        </div>
      </div>
      <div className="card__footer">
        <Button onClick={handleEdit}>{edit ? "Save" : "Edit"} </Button>
        <Button disabled={edit}>Suspend</Button>
      </div>
    </div>
  );
};

export default Card;
