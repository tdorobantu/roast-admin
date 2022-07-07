import React, { useState } from "react";
import Switch from "@mui/material/Switch";
//import "./ToggleUI.css";

const ToggleUI = ({ header, description, editable}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked((prev) => !prev);
    if (event.target.checked) {
    } else {
    }
  };
  return (
    <div className="toggleUI__container">
      <div className="toggleUI__description">
        <div className="toggleUI__description--header">
          <h3 className="toggleUI__header">{header}</h3>
        </div>
        <div className="toggle__description--text">
          <p className="toggleUI__text">{description}</p> 
        </div>
      </div>
      <div className="toggleUI__toggle">
        <Switch checked={checked} onChange={handleChange} color="warning" disabled={!editable} />
      </div>
    </div>
  );
};

export default ToggleUI;
