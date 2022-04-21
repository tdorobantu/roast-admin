import React, { useState } from "react";
import "./Card.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { editCampaign, suspendCampaign } from "../redux/slices/campaignSlice";

const Card = ({ state }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [fields, setFields] = useState(state);

  const handleEdit = () => {
    if (edit) dispatch(editCampaign(fields));
    setEdit((prev) => !prev);
  };

  const handleDisable = () => {
    dispatch(suspendCampaign(fields.id))
  }

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
      <p className="card__headerText">{fields.title}</p>
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
        <Button onClick={handleDisable} disabled={edit}>Suspend</Button>
      </div>
    </div>
  );
};

export default Card;
