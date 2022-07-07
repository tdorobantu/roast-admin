import React from "react";
import "./Tables.css";
import ReactGrid from "../components/ReactGrid";

const Tables = ({}) => {
  return (
    <div className="tables__container">
      <div className="tables__header">
        <h1>Tables :</h1>
      </div>
      <div className="react__grid">
        <ReactGrid  />
      </div>
    </div>
  );
};

export default Tables;
